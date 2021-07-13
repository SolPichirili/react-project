import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer saludo = 'Hola, soy ItemListContainer' />
    </div>
  );
}

export default App;
