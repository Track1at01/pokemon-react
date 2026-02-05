// import { useState, useRef, useEffect } from "react";

// export default function DraggableImage({ data, close }) {
//   const [position, setPosition] = useState({ x: 300, y: 200 });
//   const dragging = useRef(false);
//   const  offset= useRef({ x: 0, y: 0 });

//   const startDrag = (e) => {
//     dragging.current = true;
//     offset.current = {
//       x: e.clientX - position.x,
//       y: e.clientY - position.y,
//     };
//   };

//   const onDrag = (e) => {
//     if (!dragging.current) return;
//     setPosition({
//       x: e.clientX - offset.current.x,
//       y: e.clientY - offset.current.y,
//     });
//   };

//   const stopDrag = () => dragging.current = false;

//   useEffect(() => {
//     window.addEventListener("mousemove", onDrag);
//     window.addEventListener("mouseup", stopDrag);
//     return () => {
//       window.removeEventListener("mousemove", onDrag);
//       window.removeEventListener("mouseup", stopDrag);
//     };
//   }, []);

//   if (!data) return null;

//   return (
//     <div
//       onMouseDown={startDrag}
//       style={{
//         position: "fixed",
//         left: position.x,
//         top: position.y,
//         width: 180,
//         background: "#222",
//         padding: 10,
//         borderRadius: 12,
//         zIndex: 9999,
//         cursor: "grab"
//       }}
//     >
//       <img
//         src={require(`../imagenes/${data.imagen}.png`)}
//         style={{ width: "100%" }}
//         alt={data.nombre}
//       />
//       <h4>{data.nombre}</h4>
//       <p>{data.primertipo} {data.segundotipo}</p>

//       <button onClick={close}>Cerrar</button>
//     </div>
//   );
// }
