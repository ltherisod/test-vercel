import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import NavbarBoots from './components/NavbarBoots';
import ItemListContainer from './components/ItemListContainer';



function App() {
  const titulo='Lista de productos'
  const otrotitulo = 'soy el contador'
  return (
    <div className="App">
      {/* <Navbar/> */}
      <NavbarBoots/>
      <ItemListContainer greeting='Bienvenidos!!' titulo={titulo} otrotitulo={otrotitulo}/>
    </div>
  );
}

export default App;
