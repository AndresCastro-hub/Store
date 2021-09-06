import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/NavBar/ItemListContainer';
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer mensaje = 'Hola soy Item List Container'/>
    </>
  );
  
  
}

export default App;

