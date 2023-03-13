import React from 'react';
import {useSelector} from 'react-redux';

const InfoEnviada = () => {

   const { formulario } = useSelector((state) => {
      return state;
   });
 const [informacion, setInformacion] = React.useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
 })
 React.useEffect(()=>{
 setInformacion(formulario)
 },[formulario])

   return (
      <div>
         <h1>ESTA ES LA INFORMACIÓN QUE ENVIASTE....</h1>
         <h3>{formulario.nombre}</h3>
         <h3>{formulario.email}</h3>
         <h3>{formulario.asunto}</h3>
         <h3>{formulario.mensaje}</h3>
      </div>
   );
};

export default InfoEnviada;
