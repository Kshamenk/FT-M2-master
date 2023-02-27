import React,{useState} from "react";


export default function SearchBar(props) {
   // var props = {onSearch:fn()}
   const [character, setCharacter] = useState("")

 function handlerImputChange(event) {
   var value = event.target.value
   setCharacter(value)
 }
   return (
      <div>
         <input type='search' onChange={handlerImputChange}/>
         <button onClick={ ()=> props.onSearch(character) }>Add</button>
      {/* <button onClick={()=>props.onChange(character)}>Agregar</button> */}
      </div>
   );
}
