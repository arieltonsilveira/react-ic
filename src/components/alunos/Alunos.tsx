import React, { useEffect, useState } from "react";
import { alunosData } from "./alunoData";
import AlunoList from "./AlunoList";

const Alunos: React.FC = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Entrou no useEffect");

    if (counter !== 10) return;

    alert("O contador chegou no número 10");
  }, [counter]);

  return (
    <>
      <AlunoList alunos={alunosData} />

      <h1>{counter}</h1>

      <button onClick={() => setCounter(counter + 1)}>
        Incrementar contador
      </button>
    </>
  );
};

export default Alunos;
