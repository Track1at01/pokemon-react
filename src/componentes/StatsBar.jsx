function StatsBar({ nombre, valor }) {
  const max = 150;
  const porcentaje = (valor / max) * 100;
  

  let color = "#ff6b69";
  if (porcentaje > 33) color = "#ffaf4c";
  if (porcentaje > 60) color = "#43a098";
  const leftRadius = 12;
  const rightRadius = valor >= max ? 12 : 0;
  const showInside = porcentaje >= 2; 

  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: 6 }}>
      <span style={{ width: 95, fontWeight: "bold" }}>{nombre}</span>

      <div style={{
        flex: 1,
        height: 25,
        background: "#d6d6d6",
        margin: "0 10px",
        padding: 2,
        overflow: "hidden",
        position: "relative",
      }}>
        <div style={{
          width: `${porcentaje}%`,
          height: "100%",
          background: color,
          transition: "width .9s",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          paddingRight: 6,
          boxSizing: "border-box",
          borderTopLeftRadius: leftRadius,
          borderBottomLeftRadius: leftRadius,
          borderTopRightRadius: rightRadius,
          borderBottomRightRadius: rightRadius,
        }}>
          {showInside && (
            <span style={{
              color: "#ffffffde",
              fontSize: 12,
              whiteSpace: "nowrap",
            }}>{valor}</span>
          )}
        </div>
      </div>

     
    </div>
  );
}

export default StatsBar;
