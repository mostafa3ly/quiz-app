import { ChangeEvent, FC, memo } from "react";
import { Answer } from "src/interfaces/Answer";

interface AnswerItemProps {
  answer: Answer;
  onChangeAnswer: (e: ChangeEvent<HTMLInputElement>, id: number) => void;
}

const AnswerItem: FC<AnswerItemProps> = ({ answer, onChangeAnswer }) => {
  const handleChangeAnswer = (e: ChangeEvent<HTMLInputElement>): void => {
    onChangeAnswer(e, answer.id);
  };

  return (
    <div>
      <input
        placeholder="Text"
        value={answer.text}
        name="text"
        onChange={handleChangeAnswer}
      />
      <br />
      <input
        name="is_true"
        type="checkbox"
        checked={answer.is_true}
        onChange={handleChangeAnswer}
      />
      <label htmlFor="is_true">Is true</label>
      <br />
      <br />
    </div>
  );
};

export default memo(AnswerItem);
