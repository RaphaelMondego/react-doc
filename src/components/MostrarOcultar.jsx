import { useState } from "react";

function MostrarOcultar() {
  const [mostrar, setMostrar] = useState(true);

  function alternarTexto() {
    setMostrar(!mostrar);
  }

  return (
    <div>
      <button onClick={alternarTexto}>Mostrar / Ocultar</button>
      {mostrar && <p>Esse texto aparece e desaparece</p>}
    </div>
  );
}

export default MostrarOcultar;