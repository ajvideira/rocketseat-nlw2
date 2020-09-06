import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

interface TeacherItemProps {

}

const TeacherItem:React.FC<TeacherItemProps> = (props) => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/5177402?s=460&u=33774f29e7abde4236899cac5ba6d592b888b7a0&v=4" alt="Jonathan Alba Videira"/>
                <div>
                    <strong>Jonathan Alba Videira</strong>
                    <span>Química</span>
                </div>
            </header>
            
            <p>
                Entusiasta das melhores tecnologias de química avançada.
                <br /><br />
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
            </p>
            
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em Contato
                </button>
            </footer>
        </article>
    );
};

export default TeacherItem;