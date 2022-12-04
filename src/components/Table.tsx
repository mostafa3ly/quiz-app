import { FC } from "react";
import useQuizzes from "src/hooks/useQuizzes";
import QuizRow from "./QuizRow";
import TableHead from "./TableHead";

const Table: FC = () => {
  const { quizzes } = useQuizzes();

  const renderQuizzes = (): JSX.Element[] =>
    quizzes.map((quiz) => <QuizRow key={quiz.id} quiz={quiz} />);

  return (
    <table width="100%" border={1}>
      <TableHead />
      <tbody>{renderQuizzes()}</tbody>
    </table>
  );
};

export default Table;
