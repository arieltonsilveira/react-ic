import React from "react";
import { alunosData } from "./alunoData";
import AlunoList from "./AlunoList";

const Alunos: React.FC = () => {
  return (
    <>
      <AlunoList alunos={alunosData} />
    </>
  );
};

export default Alunos;
