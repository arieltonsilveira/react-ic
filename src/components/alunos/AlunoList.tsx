import React from "react";
import { Aluno } from "../../types/aluno";
import AlunoItem from "./AlunoItem";

interface AlunoListProps {
  alunos: Aluno[];
}

const AlunoList: React.FC<AlunoListProps> = ({ alunos }) => {
  return (
    <ul>
      {alunos.map((aluno) => (
        <AlunoItem key={aluno.nome} aluno={aluno} />
      ))}
    </ul>
  );
};

export default AlunoList;
