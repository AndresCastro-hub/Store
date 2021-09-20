import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer'
import AppCss from './App.css'
import {BrowserRouter, Switch , Route} from 'react-router-dom'



function App() {
  return (
    <>
      <BrowserRouter>
    
        <NavBar/>

          <Switch>
          
            <Route exact path='/' component = {ItemListContainer}/>

            <Route path = '/categoria/:idCategoria' component={ItemListContainer}/>
           
            <Route exact path ='/item/:id' component = {ItemDetailContainer}/>
      
          </Switch>

      </BrowserRouter>
    </>
  );
  
  
}

export default App;

