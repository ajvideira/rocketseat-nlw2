import db from '../database/connection';
import convertHoursToMinutes from '../utils/convertHoursToMinutes';
import { Request, Response } from 'express';

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

export default class ClassesController {
  async index(request: Request, response: Response) {
    const filters = request.query;

    const subject = filters.subject as string;
    const week_day = filters.week_day as string;
    const time = filters.time as string;

    if (!subject || !week_day || !time) {
      return response.status(400).json({
        error: 'Missing filter to search classes',
      });
    }

    const timeInMinutes = convertHoursToMinutes(time);

    const classes = await db
      .select(['c.*', 'u.*'])
      .from({ c: 'classes' })
      .join({ u: 'users' }, 'c.user_id', '=', 'u.id')
      .join({ cs: 'class_schedule' }, 'c.id', '=', 'cs.class_id')
      .where('c.subject', '=', subject)
      .andWhere('cs.week_day', '=', Number(week_day))
      .andWhere('cs.from', '<=', timeInMinutes)
      .andWhere('cs.to', '>', timeInMinutes);
    return response.status(200).json(classes);
  }

  async create(request: Request, response: Response) {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule,
    } = request.body;

    const transaction = await db.transaction();

    try {
      const insertedUsersIds = await transaction('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
      });

      const user_id = insertedUsersIds[0];

      const insertedClassesIds = await transaction('classes').insert({
        subject,
        cost,
        user_id,
      });

      const class_id = insertedClassesIds[0];

      const scheduleClass = schedule.map((scheduleItem: ScheduleItem) => ({
        week_day: scheduleItem.week_day,
        from: convertHoursToMinutes(scheduleItem.from),
        to: convertHoursToMinutes(scheduleItem.to),
        class_id,
      }));

      await transaction('class_schedule').insert(scheduleClass);

      await transaction.commit();
      response.status(201).send();
    } catch (err) {
      console.log(err);
      transaction.rollback();
      return response.status(400).json({
        mensagem: 'Ocorreu um erro inesperado. Tente novamente',
      });
    }
  }
}
