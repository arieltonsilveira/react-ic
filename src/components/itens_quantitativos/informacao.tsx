import React from "react";

const Informacao = (chave: string, valor: string) => {
    return (
        <>
            <h1>{chave}: {valor}</h1>
        </>
    );
}

export default Informacao;