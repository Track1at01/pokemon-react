import StatsBar from "./StatsBar";
import "../hojas-de-estilos/Stadisticas.css";
import { tiposInfo } from "../data/tiposInfo.js";


function StatsPanel({ pokemon }) {
    if (!pokemon) return null;


const tipo1 = tiposInfo[pokemon.tipoPrincipal];
  const tipo2 = pokemon.tipoSecundario ? tiposInfo[pokemon.tipoSecundario] : null;


    return (
        <div className="caja-arriba">

            <div className="pesoYesasvainas">

                <h5>ID:  </h5>
                <h5>Altura:  No definido </h5>
                <h5>Peso:  No definido</h5>
                <h5>Tipo:   </h5>

                <div className="tipos">
                    <div className="tipoPrimario" style={{ ["--colorFondo"]: tiposInfo[pokemon.tipoPrincipal].color  }}>
                        <img className="tiposimg" src={tipo1.img} alt={pokemon.tipoPrincipal} />
                        <h5>{pokemon.tipoPrincipal}</h5>
                    </div>

                    {tipo2 && (
                        <div className="tipoSecundario" style={{ ["--colorFondo"]: tiposInfo[pokemon.tipoSecundario].color
                        }}>
                            <img className="tiposimg" src={tipo2.img} alt={pokemon.tipoSecundario} />
                            <h5>{pokemon.tipoSecundario}</h5>
                        </div>
                    )}
                </div>




            </div>

            <div>
                <img src={pokemon.imagen} alt={pokemon.nombre} className="pokemon-arriba"/>
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
                <StatsBar nombre="Velocidad" valor={pokemon.estadisticas.velocidad} />
            </div>
        </div >
    );
}

export default StatsPanel;
