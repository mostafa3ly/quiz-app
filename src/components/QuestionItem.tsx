import { ChangeEvent, FC, memo } from "react";
import { Question } from "src/interfaces/Question";

interface QuestionItemProps {
  question: Question;
  onChangeQuestion: (e: ChangeEvent<HTMLInputElement>, id: number) => void;
  onAddAnswer: (id: number) => void;
}

const QuestionItem: FC<QuestionItemProps> = ({
  question,
  onChangeQuestion,
  onAddAnswer,
}) => {
  const handleAddAnswer = (): void => {
    onAddAnswer(question.id);
  };

  const handleChangeQuestion = (e: ChangeEvent<HTMLInputElement>): void => {
    onChangeQuestion(e, question.id);
  };
  return (
    <div>
      <input
        placeholder="Text"
        value={question.text}
        name="text"
        onChange={handleChangeQuestion}
      />
      <br />
      <input
        placeholder="Feedback if false"
        value={question.feedback_false}
        name="feedback_false"
        onChange={handleChangeQuestion}
      />
      <br />
      <input
        placeholder="Feedback if true"
        value={question.feedback_true}
        name="feedback_true"
        onChange={handleChangeQuestion}
      />
      <div style={{ display: "flex", alignItems: "center" }}>
        <h6>Answers</h6>&nbsp;&nbsp;&nbsp;
        <button type="button" onClick={handleAddAnswer}>
          Add answer
        </button>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default memo(QuestionItem);
