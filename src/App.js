import './App.css';
import Slot from './componentes/Slot.jsx';
import { kanto } from './data/kanto.js';

function App() {
  return (
    <div className="App">
      <div className='todos'>
        {kanto.map(pokemon => (
          <Slot key={pokemon.id} {...pokemon} />
        ))}
      </div>
    </div>
  );
}

export default App;
