import './App.css';
import { useState } from 'react';
import Slot from './componentes/Slot.jsx';

function App() {
  return (
    <div className="App">
      

    <div className='todos'>


      <Slot
        imagen="bulbasaur4"
        nombre="Bulbasuar"
        primertipo="Planta"
        alt_tipo1="Planta"
        segundotipo="Veneno"
        alt_tipo2="Veneno"
        colorfondo1="rgba(47, 167, 17, 0.34)"
        colorfondo2="rgba(145, 0, 189, 0.77)"
        hoverColor="rgba(43, 223, 15, 0.72)"
        alt="Bulbasaur"
        />
      <Slot
        imagen="ivysaur"
        nombre="Ivysaur"
        primertipo="planta"
        alt_tipo1="Planta"
        segundotipo="Veneno"
        alt_tipo2="veneno"
        colorfondo1="rgba(47, 167, 17, 0.34)"
        colorfondo2="rgba(145, 0, 189, 0.77)"
        hoverColor="rgba(43, 223, 15, 0.72)"
        alt="Ivysaur"
        />
      <Slot
        imagen="venasaur"
        nombre="Venasuar"
        primertipo="Planta"
        alt_tipo1="planta"
        segundotipo="Veneno"
        alt_tipo2="veneno"
        colorfondo1="rgba(47, 167, 17, 0.34)"
        colorfondo2="rgba(145, 0, 189, 0.77)"
        hoverColor="rgba(43, 223, 15, 0.72)"
        alt="Venasaur"
        />
      <Slot
        imagen="Squirtle"
        nombre="Squirtle"
        primertipo="Agua"
        alt_tipo1="Agua"
        segundotipo=""
        alt_tipo2=""
        colorfondo1="rgba(80, 156, 255, 0.49)"
        colorfondo2="rgba(5, 63, 138, 0.52)"
        hoverColor="rgba(0, 47, 176, 0.56)"
        alt="squirtle"
        />
      <Slot
        imagen="wartortle"
        nombre="Wartortle"
        primertipo="agua"
        alt_tipo1="agua"
        segundotipo=""
        alt_tipo2=""
        colorfondo1="rgba(80, 156, 255, 0.49)"
        colorfondo2="rgba(5, 63, 138, 0.52)"
        hoverColor="rgba(0, 47, 176, 0.56)"
        alt="wartortle"
        />
      <Slot
        imagen="blastoise"
        nombre="Blastoise"
        primertipo="Agua"
        alt_tipo1="agua"
        segundotipo=""
        alt_tipo2=""
        colorfondo1="rgba(80, 156, 255, 0.49)"
        colorfondo2="rgba(5, 63, 138, 0.52)"
        hoverColor="rgba(0, 47, 176, 0.56)"
        alt="Blastoise"
      />
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

    </div>
  );
}

export default App;
