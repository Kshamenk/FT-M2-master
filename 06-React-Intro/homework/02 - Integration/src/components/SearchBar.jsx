export default function SearchBar(props) {
   // var props = {onSearch:fn()}
   return (
      <div>
         <input type='search' />
      <button onClick={()=>props.onSearch(1)}>Agregar</button>
      </div>
   );
}
