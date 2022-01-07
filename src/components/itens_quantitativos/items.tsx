import React from "react";

interface inf {
    id: number,
    key: string,
    value: string,
}

const ItemQuantitavo = (data: Array<inf>) => {
    return (
        <>
            {data.map(item => <itemQuantitavo chave={item.key} valor={item.value}/>)}
        </>
    );
}

export default ItemQuantitavo;