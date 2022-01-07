import React from "react";
import { Aluno } from "../../types/aluno";

interface AlunoItemProps {
  aluno: Aluno;
}

const AlunoItem: React.FC<AlunoItemProps> = ({ aluno }) => {
  return (
    <>
      <p>{aluno.nome}</p>
      <p>{aluno.idade}</p>
    </>
  );
};

export default AlunoItem;
