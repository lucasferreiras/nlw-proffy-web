import React, { TextareaHTMLAttributes } from 'react'

import './styles.css'

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
  name: string
  label: string
}

const Textarea: React.FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest}/>
    </div>
  )
}

export default Textarea