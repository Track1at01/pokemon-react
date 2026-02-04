import './App.css';
import { useState } from 'react';
import Slot from './componentes/Slot.jsx';

function App() {
  return (
    <div className="App">
      
      <Slot
        imagen="mew"
        nombre="Mew"
        primertipo="Dragon"
        alt_tipo1="dragon"
        segundotipo="fantasma"
        alt_tipo2="pelele"
        colorfondo1="rgba(255, 255, 255, 0.34)"
        colorfondo2="rgba(255, 100, 237, 0.77)"
        hoverColor="rgba(57, 197, 36, 0.44)"
        alt="mew"
      />
      <Slot
        imagen="Kakuna"
        nombre="Kakuna"
        primertipo="planta"
        alt_tipo1="dragon"
        segundotipo="electrico"
        alt_tipo2="pelele"
        colorfondo1="rgba(255, 225, 0, 0.33)"
        colorfondo2="rgba(158, 47, 255, 0.76)"
        hoverColor="rgba(94, 0, 176, 0.44)"
        alt="Kakuna"
      />
    </div>
  );
}

export default App;
