import React from 'react';
import { Link } from 'react-router-dom';

import BackIcon from '../../assets/images/icons/back.svg';
import LogoIcon from '../../assets/images/logo.svg';

import './styles.css';

interface PageHaderProps {
  title: String;
}

const PageHader: React.FC<PageHaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/" title="Voltar">
          <img src={BackIcon} alt="Voltar" />
        </Link>
        <Link to="/" title="Proffy">
          <img src={LogoIcon} alt="Proffy" />
        </Link>
      </div>
      <div className="header-content">
        <strong>{props.title}</strong>
        {props.children}
      </div>
    </header>
  );
};

export default PageHader;
