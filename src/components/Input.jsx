import { useState } from "react";

function InputTexto() {
  const [texto, setTexto] = useState("");

  function handleChange(event) {
    setTexto(event.target.value);
  }

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <p>Você digitou: {texto}</p>
    </div>
  );
}

export default InputTexto;