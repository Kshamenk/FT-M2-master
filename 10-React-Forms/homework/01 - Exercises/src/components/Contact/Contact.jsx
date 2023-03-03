import React from 'react'
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function Contact() {

  const [inputs, setinputs] = React.useState({
    name: '',
    email: '',
    phone: 0,
    subject: '',
    message: '',

  })
  const [errors, seterrors] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
function handleChange(evento) {
  const property = evento.target.name
  const value = evento.target.value
  setinputs({
    ...inputs,
    [property]:value
  })
}


  return (
    <div>
      <form >
        <label htmlFor="name">Nombre:</label>
        <input type="text" name='name' value={inputs.name} placeholder='Escribe tu nombre...'  onChange={handleChange} />
        <label htmlFor="email" >Correo Electrónico:</label>
        <input type="text" name='email' value={inputs.email} placeholder='Escribe tu email...'  onChange={handleChange}/>
        <label htmlFor="phone">Teléfono:</label>
        <input type="number" name='phone' value={inputs.phone} placeholder='Escribe un teléfono...'  onChange={handleChange}/>
        <label htmlFor="subject">Asunto:</label>
        <input type="text" name='subject' value={inputs.subject} placeholder='Escribe el asunto...'  onChange={handleChange}/>
        <label htmlFor="message">Mensaje:</label>
        <textarea type='text' name="message" value={inputs.message} placeholder='Escribe tu mensaje...' onChange={handleChange}></textarea>
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}
