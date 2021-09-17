import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer'
import AppCss from './App.css'


function App() {
  return (
    <>
    <NavBar/>
    <h2 className='titulo'>Nike Store</h2>
    <ItemListContainer/>
    <ItemDetailContainer/>
    </>
  );
  
  
}

export default App;

