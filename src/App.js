import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer'


function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer/>
    <ItemDetailContainer/>
    </>
  );
  
  
}

export default App;

