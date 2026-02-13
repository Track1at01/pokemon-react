import BarraStat from "./StatsBar.jsx";

function Stats({ estadisticas }) {
  return (
    <div>
      <BarraStat label="HP" valor={estadisticas.vida} />
      <BarraStat label="Ataque" valor={estadisticas.ataque} />
      <BarraStat label="Defensa" valor={estadisticas.defensa} />
      <BarraStat label="Atq. Esp." valor={estadisticas.ataqueEspecial} />
      <BarraStat label="Def. Esp." valor={estadisticas.defensaEspecial} />
      <BarraStat label="Velocidad" valor={estadisticas.velocidad} />
    </div>
  );
}

export default Stats;
