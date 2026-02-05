import "../hojas-de-estilos/Slot.css";
import bgPokeball from '../imagenes-fondos/pokeball-blanca.png';
import { tiposInfo } from "../data/tiposInfo";

function Slot(props) {

  const gradient = `linear-gradient(180deg, ${props.colorFondo1}, ${props.colorFondo2})`;

  const style = {
    backgroundImage: `${gradient}, url(${bgPokeball})`,
    backgroundRepeat: 'no-repeat',
    ['--hover-bg']: props.colorHover
  };

  const tipo1 = tiposInfo[props.tipoPrincipal];
  const tipo2 = props.tipoSecundario ? tiposInfo[props.tipoSecundario] : null;

  return (
    <div className="Contenedor-principal" style={style}>

      <img className="imagen-pokemon" src={props.imagen} alt={props.nombre} />

      <h4>
        <hr />
        <br />
        ○ {props.nombre} ○
      </h4>

      <div className="tipos">
        <div className="tipoPrimario" style={{backgroundColor: tipo1.color}}>
          <img className="tiposimg" src={tipo1.img} alt={props.tipoPrincipal} />
          <h5>{props.tipoPrincipal}</h5>
        </div>

        {tipo2 && (
          <div className="tipoSecundario" style={{backgroundColor: tipo2.color}}>
            <img className="tiposimg" src={tipo2.img} alt={props.tipoSecundario} />
            <h5>{props.tipoSecundario}</h5>
          </div>
        )}
      </div>

    </div>
  );
}

export default Slot;
