//import logo from './logo.svg';
import './App.css';
import { Iniciar } from './components/Iniciar';
import { Web } from './components/Web';
//import { Filtro } from './components/Filtro';
//import { Ventas } from './components/Ventas';
import { useState } from 'react';


function App() {

const [user, setUser] = useState([]);

  return (
   <div className="App">
      {
       !user.length > 0 ? <Iniciar setUser={setUser}/> : <Web user={user} setUser={setUser}/>
      }
    </div>
  );
}

export default App;
