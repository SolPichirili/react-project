import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContextProvider from './context/CartContext/CartContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <CartContextProvider>
    <Router>
      <div className="App">
        <NavBar />

        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/categories/:categoryId">
            <ItemListContainer />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart">
            <Cart /> 
          </Route>
        </Switch>
      </div>
    </Router>
    </CartContextProvider>
  );
}

export default App;
