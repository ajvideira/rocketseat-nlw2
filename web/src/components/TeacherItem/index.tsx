import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import Teacher from '../../models/teacher';
import api from '../../services/api';

import './styles.css';

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  async function createConnection(id: number) {
    await api.post('connections', { user_id: id });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={`https://wa.me/${teacher.whatsapp}`}
          title="Entrar em contato"
          onClick={(e) => {
            createConnection(teacher.id);
          }}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em Contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
