import './App.css';
import Slot from './componentes/Slot.jsx';
import { kanto } from './data/kanto.js';

import StatsPanel from './componentes/StatsPanel';
import { useState } from 'react';

function App() {
  const [pokemonActivo, setPokemonActivo] = useState(null);

  return (
    <div className="App">

     

      <StatsPanel pokemon={pokemonActivo} />

      <div className='todos'>
        {kanto.map(pokemon => (
          <Slot
            key={pokemon.id}
            {...pokemon}
            onClick={() => setPokemonActivo(pokemon)}
          />
        ))}
      </div>

    </div>
  );
}

export default App;
