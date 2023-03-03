import React from 'react';
import './Contact.modules.css';

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(inputs) {
  const errors = {};

  if (!inputs.name) {
    errors.name = 'Se requiere un nombre';
  }
  if (!regexEmail.test(inputs.email)) {
    errors.email = 'Debe ser un correo electrónico';
  }
  if (inputs.phone <= 0) {
    errors.phone = 'Sólo números positivos';
  }
  if (!inputs.subject) {
    errors.subject = 'Se requiere un asunto';
  }
  if (!inputs.message) {
    errors.message = 'Se requiere un mensaje';
  }

  return errors;
}

export default function Contact() {
  const [inputs, setInputs] = React.useState({
    name: '',
    email: '',
    phone: 0,
    subject: '',
    message: '',
  });

  const [errors, setErrors] = React.useState({});

  function handleChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...inputs,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errorsArray = Object.values(errors); // Convertir el objeto errors en un array para medir su longitud
    if (errorsArray.length === 0) {
      window.alert('Datos completados'); // Mostrar un mensaje de "Datos completos" si no hay errores
      setInputs({
        name: '',
        email: '',
        phone: 0,
        subject: '',
        message: '',
      }); // Setear los estados de inputs y errors en su estado original
      setErrors({});
    } else {
      window.alert('Debes corregir todos los errores'); // Mostrar un mensaje de "Debe llenar todos los campos" si hay errores
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          name="name"
          value={inputs.name}
          placeholder="Escribe tu nombre..."
          onChange={handleChange}
          className={errors.name && 'warning'}
        />
        {errors.name && <p className="danger">{errors.name}</p>}
        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="text"
          name="email"
          value={inputs.email}
          placeholder="Escribe tu email..."
          onChange={handleChange}
          className={errors.email && 'warning'}
        />
        {errors.email && <p className="danger">{errors.email}</p>}
        <label htmlFor="phone">Teléfono:</label>
        <input
          type="number"
          name="phone"
          value={inputs.phone}
          placeholder="Escribe un teléfono..."
          onChange={handleChange}
          className={errors.phone && 'warning'}
        />
        {errors.phone && <p className="danger">{errors.phone}</p>}
        <label htmlFor="subject">Asunto:</label>
        <input
          type="text"
          name="subject"
          value={inputs.subject}
          placeholder="Escribe el asunto..."
          onChange={handleChange}
          className={errors.subject && 'warning'}
        />
        {errors.subject && <p className="danger">{errors.subject}</p>}
        <label htmlFor="message">Mensaje:</label>
        <textarea
          type="text"
          name="message"
          value={inputs.message}
          placeholder="Escribe tu mensaje..."
          onChange={handleChange}
          className={errors.message && 'warning'}
        ></textarea>
        {errors.message && <p className="danger">{errors.message}</p>}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}