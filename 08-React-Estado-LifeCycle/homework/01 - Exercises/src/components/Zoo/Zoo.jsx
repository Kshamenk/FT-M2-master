import React from 'react';
// eslint-disable-next-line no-unused-vars
import Animals from '../Animals/Animals';
// eslint-disable-next-line no-unused-vars
import Species from '../Species/Species';
import './Zoo.module.css';

export default function Zoo() {
   /* Escribe acá tu código */
   const [zoo, setZoo] = React.useState({
      zooName: "",
      animals: [],
      species: [],
      allAnimals: [],
   })

   let handleInputChange = (event) => {   // de quien es.
      let value = event.target.value     //lo que se escribe dentro. del target sacamos el valor.
      setZoo({            //seteando el valor de la propiedad
         ...zoo,           //importante. para no cambiar el objeto
         zooName: value
      })
   }

   React.useEffect(() => {
      fetch('http://localhost:3001/zoo')
         .then((res) => res.json())
         .then((data) => {
            setZoo({
               ...zoo,
               animals: data.animals,
               species: data.species,
               allAnimals: data.animals
            })
         })
         .catch((err) => console.log(err))
   }, [])
   
   
   let handleSpecies = (event)=>{};
   let handleAllSpecies = (event)=>{}

   
   return (
      <div>
         <label>Zoo Name:</label>
         <input onChange={handleInputChange} value={zoo.zooName} />
         <h1>{zoo.zooName}</h1>
         <Species species={zoo.species} handleSpecies={handleSpecies} handleAllSpecies= {handleAllSpecies}/>
         <Animals animals={zoo.animals}/>
      </div>
   );
}

