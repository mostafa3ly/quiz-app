import { FC, memo } from "react";
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
      <td>{quiz.created}</td>
      <td>
        <a href="/">Edit</a>
      </td>
    </tr>
  );
};

export default memo(QuizRow);
