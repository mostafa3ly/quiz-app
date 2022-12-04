import { FC } from "react";
import { Navigate, useParams } from "react-router-dom";
import QuizQuestion from "src/components/QuizQuestion";
import useQuizzes from "src/hooks/useQuizzes";

type Params = {
  id: string;
};

const TakeQuiz: FC = () => {
  const { quizzes } = useQuizzes();
  const { id } = useParams<Params>();
  const quiz = id ? quizzes.find((quiz) => quiz.id === +id) : null;

  if (!quiz) return <Navigate to="/" />;

  const renderQuestions = (): JSX.Element[] =>
    quiz.questions_answers.map((question) => (
      <QuizQuestion key={question.id} question={question} />
    ));

  return (
    <div>
      <h1>{quiz.title}</h1>
      <p>{quiz.description}</p>
      <p>Score: {quiz.score}</p>
      <a href={quiz.url} target="_blank" rel="noopener noreferrer">
        Youtube video
      </a>
      {renderQuestions()}
    </div>
  );
};
export default TakeQuiz;
