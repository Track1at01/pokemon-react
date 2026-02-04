import React from "react";
import "../hojas-de-estilos/Slot.css"
import bgPokeball from '../imagenes-fondos/pokeball-blanca.png';

function Slot(props) {
    const gradient = `linear-gradient(180deg, ${props.colorfondo1 || 'rgba(0,0,0,0.25)'}, ${props.colorfondo2 || 'rgba(0,0,0,0.15)'})`;
    const style = {
        backgroundImage: `${gradient}, url(${bgPokeball})`,
        backgroundRepeat: 'no-repeat',
        ['--hover-bg']: props.hoverColor || undefined
    };
    const typeColors = {
        dragon: '#8d72f9',
        fantasma: '#4f0063', 
        fuego: '#EE8130', 
        agua: '#6390F0', 
        planta: '#7AC74C', 
        electrico: '#F7D02C', 
        bicho: '#A6B91A',
        hada: '#F48FB1', 
        hielo: '#96D9D6', 
        lucha: '#C22E28', 
        normal: '#A8A77A',
        psiquico: '#F95587', 
        roca: '#B6A136', 
        tierra: '#E2BF65', 
        veneno: '#A33EA1', 
        volador: '#A98FF3', 
    };
    const norm = s => (s || '').toString().trim().toLowerCase();
    const colorTipo1 = props.colortipo1 || typeColors[norm(props.primertipo)] || '#777';
    const colorTipo2 = props.colortipo2 || typeColors[norm(props.segundotipo)] || '#777';

    const typeIcons = {
        dragon: 'dragon-icono.png',
        fantasma: 'fantasma-icono.png', 
        fuego: 'fuego_icono.png', 
        agua: 'agua-icono.png', 
        planta: 'Planta-icono.jpg', 
        electrico: 'Electrico_icono.jpg', 
        bicho: 'bicho-icono.png', 
        hada: 'hada-icono.png', 
        hielo: 'hielo-icono.png',
        lucha: 'lucha-icono.png', 
        normal: 'normal-icono.png',
        psiquico: 'Psiquico-icono.png',
        roca: 'roca-icono.jpg',
        tierra: 'tierra-icono.jpg', 
        veneno: 'Veneno_icono.png', 
        volador: 'volador-icono.png', 
    };

    const resolveIconFile = (imagenProp, tipo) => {
        if (imagenProp) {
            const p = imagenProp.toString().trim();
            if (p.includes('.') || p.toLowerCase().includes('icono')) return p;
            const key = norm(p);
            return typeIcons[key] || `${key}-icono.png`;
        }
        return typeIcons[norm(tipo)] || null;
    };
    const iconFile1 = resolveIconFile(props.imagen_tipo1, props.primertipo);
    const iconFile2 = resolveIconFile(props.imagen_tipo2, props.segundotipo);
    return (
        <div className="Contenedor-principal" style={style}>
            {props.imagen && (
              <img className="imagen-pokemon"
                src={require(`../imagenes/${props.imagen}.png`)}
                alt={props.alt} />
            )}
            <h4 >
            <hr></hr>
            <br/>
            ○ {props.nombre} ○
            </h4>
            <div className="tipos">
                <div className="tipoPrimario"
                    style={{ backgroundColor: colorTipo1 }}>
                    {iconFile1 && (
                      <img className="tiposimg"
                        src={require(`../imagenes_tipos/${iconFile1}`)}
                        alt={props.alt_tipo1} 
                         />
                    )}
                    <h5>{props.primertipo} </h5>
                </div>
                <div className="tipoSecundario"
                    style={{ backgroundColor: colorTipo2 }}>
                    {iconFile2 && (
                      <img className="tiposimg"
                        src={require(`../imagenes_tipos/${iconFile2}`)}
                        alt={props.alt_tipo2}  />
                    )}
                    <h5>{props.segundotipo} </h5>
                </div>

            </div>


        </div>
    )
}

export default Slot;