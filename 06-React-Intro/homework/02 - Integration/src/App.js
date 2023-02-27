import './App.css';
import React,{useState} from 'react';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
//import characters from './data.js';

function App() {
  const [characters, setCharacters] = useState([])

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

 function onClose(id) {
  setCharacters(characters.filter( (char)=> char.id !== id ))
 }


  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch={onSearch} />
      <hr />
      <div>
        <Cards onClose={onClose} characters={characters} />
      </div>
    </div>
  );
}

export default App;
