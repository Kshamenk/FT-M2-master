import React from 'react'

export default function Species (props) {
  return (
    <div>
      <h2>Species</h2>
      {
        props.species.map((specie,index)=>{
         return <button value={specie}  onClick={props.handleSpecies}  key={index}>{specie}</button>
        })
      }
      <button onClick={props.handleAllSpecies}>All Animals</button>
    </div>
  )
}
