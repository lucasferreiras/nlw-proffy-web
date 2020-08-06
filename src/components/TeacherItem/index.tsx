import React from 'react'

import whatappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFiwhEidlxc5g/profile-displayphoto-shrink_100_100/0?e=1602115200&v=beta&t=ePyV1A-j9H5DGdGmkQX3SwGJh2I5HSngTba1CVY5VHI" alt="Lucas Ferreira" />
        <div>
          <strong>Lucas Ferreira</strong>
          <span>Fisica</span>
        </div>
      </header>
      <p>
        Instrutor de educação Física para iniciantes, minha missão de vida é levar saúde e contribuir para o crescimento de quem se interessar.
        <br /><br />
        Comecei a minha jornada profissional em 2001, quando meu pai me deu dois alteres de 32kg com a seguinte
        condição:"Aprenda a fazer dinheiro com isso!"
      </p>

      <footer>
        <p>
          Preço/hora
        <strong>R$40,00</strong>
        </p>
        <button type="button">
          <img src={whatappIcon} alt="whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem