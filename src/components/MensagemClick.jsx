function MensagemClick(){
    function handleClick(){
        console.log("React é poderoso!");
    }

    return (
        <button onClick={handleClick}>
            Clica aí
        </button>
    );
}

export default MensagemClick;