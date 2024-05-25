
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from './components/Navegacion';
import { Home } from './components/Home';
import { Contacto } from './components/Contacto';
import { Route,Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Navegacion/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contacto" element={<Contacto/>}/>
      </Routes>
    </>
  )
}

export default App
