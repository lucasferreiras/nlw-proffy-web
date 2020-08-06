import React from 'react'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

import './style.css'

function Teacherlist() {
  return (
    <div id="page-teacher-list">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="Time">Hora</label>
            <input type="text" id="subject" />
          </div>
        </form>
      </PageHeader>

      <main>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
      </main>
    </div>
  )
}

export default Teacherlist