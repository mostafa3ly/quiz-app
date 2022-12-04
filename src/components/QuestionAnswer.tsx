import { ChangeEvent, FC, memo } from "react";
import { Answer } from "src/interfaces/Answer";

interface QuestionAnswerProps {
  answer: Answer;
  id: string;
  onSelectAnswer: (e: ChangeEvent<HTMLInputElement>) => void;
}

const QuestionAnswer: FC<QuestionAnswerProps> = ({
  answer,
  id,
  onSelectAnswer,
}) => {
  return (
    <div>
      <input
        type="radio"
        value={answer.id}
        name={id}
        onChange={onSelectAnswer}
      />
      <label htmlFor={id}>{answer.text}</label>
    </div>
  );
};

export default memo(QuestionAnswer);
