export default function Card({name,species,gender,image,onClose,id}) {
// const {name,species,gender,image,onClose} = props
   return (
      <div>
        
         <button onClick={onClose} value={id}>X</button>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img  src={image} alt="" />
      </div>
   );
}
