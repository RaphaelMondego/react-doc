import React from "react";

function ListaFilmes(){
    const filmes = ["Shrek", "Jogos Vorazes", "Oppenheimer", "Carros", "Madagascar"];

    return(
        <div>
            <h3>Lista de Filmes</h3>
            <ul>
                {filmes.map((filme, index) => (
                    <li key={index}>{filme}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListaFilmes;