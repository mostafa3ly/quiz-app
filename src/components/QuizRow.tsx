import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { Quiz } from "src/interfaces/Quiz";

interface QuizRowProps {
  quiz: Quiz;
}

const QuizRow: FC<QuizRowProps> = ({ quiz }) => {
  return (
    <tr>
      <td>{quiz.title}</td>
      <td>{quiz.description}</td>
      <td>{quiz.questions_answers.length} Questions</td>
      <td>{quiz.score}</td>
      <td>{new Date(quiz.created).toLocaleString()}</td>
      <td>
        <Link to={`/edit/${quiz.id}`}>Edit</Link>
      </td>
    </tr>
  );
};

export default memo(QuizRow);
