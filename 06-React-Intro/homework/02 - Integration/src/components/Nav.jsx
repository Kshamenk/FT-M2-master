import SearchBar from './SearchBar.jsx';

function Nav(props) {                //la funcion nav toma props
return (
<nav className="Nav">
<SearchBar onSearch={props.onSearch} />       
</nav>
);
}

export default Nav;