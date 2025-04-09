import React from "react";

function Times(){
    const time = ["Flamengo", "Real Madrid", "Liverpool"];

    return(
        <div>
            <h4>Times de futebol</h4>
            <ul>
                {time.map((time, index) => (
                    <li key = {index}>{time}</li>
                ))}
            </ul>
        </div>
    );
}

export default Times;