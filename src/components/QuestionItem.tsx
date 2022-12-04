import { ChangeEvent, FC, memo } from "react";
import { Question } from "src/interfaces/Question";
import AnswerItem from "./AnswerItem";

interface QuestionItemProps {
  question: Question;
  onChangeQuestion: (e: ChangeEvent<HTMLInputElement>, id: number) => void;
  onChangeAnswer: (
    e: ChangeEvent<HTMLInputElement>,
    id: number,
    questionId: number
  ) => void;
  onAddAnswer: (id: number) => void;
}

const QuestionItem: FC<QuestionItemProps> = ({
  question,
  onChangeQuestion,
  onAddAnswer,
  onChangeAnswer,
}) => {
  const handleAddAnswer = (): void => {
    onAddAnswer(question.id);
  };

  const handleChangeQuestion = (e: ChangeEvent<HTMLInputElement>): void => {
    onChangeQuestion(e, question.id);
  };

  const handleChangeAnswer = (
    e: ChangeEvent<HTMLInputElement>,
    id: number
  ): void => {
    onChangeAnswer(e, id, question.id);
  };

  const renderAnswers = (): JSX.Element[] =>
    question.answers.map((answer) => (
      <AnswerItem
        key={answer.id}
        answer={answer}
        onChangeAnswer={handleChangeAnswer}
      />
    ));

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
      <br />
      <br />
      <div style={{ display: "flex", alignItems: "center" }}>
        <h6 style={{ marginBlock: 16 }}>Answers</h6>&nbsp;&nbsp;&nbsp;
        <button type="button" onClick={handleAddAnswer}>
          Add answer
        </button>
      </div>
      <div style={{ borderBottom: "1px solid grey" }}>{renderAnswers()}</div>
      <br />
      <br />
    </div>
  );
};

export default memo(QuestionItem);
