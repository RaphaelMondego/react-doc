// 1. Importando React
import React from "react";

// 2. Criando o componente
function ListaFrutas() {
  // 3. Declarando o array de frutas
  const frutas = ["Maçã", "Banana", "Uva", "Abacaxi"];

  // 4. Usando o map para renderizar os itens em <li>
  return (
    <div>
      <h2>Lista de Frutas</h2>
      <ul>
        {frutas.map((fruta, index) => (
          // 5. Cada item precisa de uma 'key' única
          <li key={index}>{fruta}</li>
        ))}
      </ul>
    </div>
  );
}

// 6. Exportando o componente
export default ListaFrutas;


// Explicação Detalhada

// frutas.map(...): é um método do JavaScript que percorre cada item do array e retorna algo novo (nesse caso, elementos JSX).
// (fruta, index): o .map() fornece o valor atual (fruta) e a posição no array (index).
// <li key={index}>: a prop key é usada internamente pelo React pra controlar melhor as mudanças de estado em listas. Usamos o index como valor de key quando não temos um id único pra cada item.