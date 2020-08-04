import React from "react";

import wppIcon from "../../assets/images/icons/whatsapp.svg";

import './style.css'

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/49967956?s=60&v=4"
          alt="Lucas Zacarias"
        />
        <div>
          <strong>Lucas Zacarias</strong>
          <span>Developer</span>
        </div>
      </header>

      <p>
        Apaixonado por Node.js.
        <br />
        <br />
        Adoro passar meu conhecimento para pessoas que adoram assim como eu,
        essa area magnifica da tecnologia.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$45,00</strong>
        </p>
        <button type="button">
          <img src={wppIcon} alt="whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
