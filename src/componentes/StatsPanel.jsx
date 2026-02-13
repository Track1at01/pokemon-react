import StatsBar from "./StatsBar";
import "../hojas-de-estilos/Stadisticas.css";
function StatsPanel({ pokemon }) {
    if (!pokemon) return null;

    return (
        <div  className="caja-arriba">

            <div className="pesoYesasvainas" style={{

            }}>

                <h5>ID:  </h5>
                <h5>Altura:  No definido </h5>
                <h5>Peso:  No definido</h5>
                <h5>Tipo   No definido</h5>
                

            </div>

            <div>
                <img src={pokemon.imagen} alt={pokemon.nombre}  />
                <h2>{pokemon.nombre}</h2>
            </div>

            <div className="intento-perspectiva" style={{
                width: "20%",
                 }}>
            <StatsBar nombre="HP" valor={pokemon.estadisticas.vida} />
            <StatsBar nombre="Ataque" valor={pokemon.estadisticas.ataque} />
            <StatsBar nombre="Defensa" valor={pokemon.estadisticas.defensa} />
            <StatsBar nombre="Atq. Esp." valor={pokemon.estadisticas.ataqueEspecial} />
            <StatsBar nombre="Def. Esp." valor={pokemon.estadisticas.defensaEspecial} />
            <StatsBar nombre="Velocidad"  valor={pokemon.estadisticas.velocidad}/>
        </div>
        </div >
    );
}

export default StatsPanel;
