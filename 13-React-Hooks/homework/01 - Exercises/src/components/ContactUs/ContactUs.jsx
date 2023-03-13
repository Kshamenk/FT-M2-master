import React from "react";
import {useDispatch} from "react-redux";
import {enviarForm} from '../../redux/actions/actions.js'

const ContactUs = () => {

  const dispatch = useDispatch();

const handleSubmit = ()=>{
  dispatch(enviarForm(form))
}

  const [form, setForm] = React.useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
 });

 const handleInput = (event) =>{
  const value = event.target.value
  const property = event.target.name
  setForm({
    ...form,
    [property] : value
  })
 }


  return (
    <div className="contactBg">
      <input  onChange={handleInput} name="nombre" value={form.nombre} ></input>
      <input  onChange={handleInput} name="email" value={form.email} ></input>
      <input  onChange={handleInput} name="asunto" value={form.asunto} ></input>
      <input  onChange={handleInput} name="mensaje" value={form.mensaje} ></input>
      <button onClick={handleSubmit} >ENVIAR</button>
    </div>
  );
};

export default ContactUs;
