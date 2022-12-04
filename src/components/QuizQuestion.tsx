import { ChangeEvent, FC, Fragment, memo, useState } from "react";
import { Question } from "src/interfaces/Question";
import QuestionAnswer from "./QuestionAnswer";

interface QuizQuestionProps {
  question: Question;
}

const QuizQuestion: FC<QuizQuestionProps> = ({ question }) => {
  const [selected, setSelected] = useState(0);

  const handleSelectAnswer = (e: ChangeEvent<HTMLInputElement>): void => {
    setSelected(+e.target.value);
  };

  const renderAnswers = (): JSX.Element[] =>
    question.answers.map((answer) => (
      <QuestionAnswer
        key={answer.id}
        answer={answer}
        id={question.id.toString()}
        onSelectAnswer={handleSelectAnswer}
      />
    ));

  const renderFeedback = (): JSX.Element => {
    if (!selected) return <Fragment />;
    const answer = question.answers.find((answer) => answer.id === selected);
    if (!answer) return <Fragment />;
    const feedback = answer.is_true
      ? question.feedback_true
      : question.feedback_false;
    return <p>{feedback}</p>;
  };

  return (
    <div>
      <h3>{question.text}</h3>
      {renderAnswers()}
      {renderFeedback()}
    </div>
  );
};

export default memo(QuizQuestion);
