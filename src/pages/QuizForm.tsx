import { ChangeEvent, FC, useState } from "react";
import { Quiz } from "src/interfaces/Quiz";
import { Question } from "src/interfaces/Question";

const QuizForm: FC = () => {
  const [quiz, setQuiz] = useState<Quiz>({
    id: Date.now(),
    created: "",
    description: "",
    modified: "",
    questions_answers: [],
    score: 0,
    title: "",
    url: "",
  });

  const handleChangeQuiz = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setQuiz((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddQuestion = (): void => {
    const question: Question = {
      answer_id: null,
      answers: [],
      feedback_false: "",
      feedback_true: "",
      id: Date.now(),
      text: "",
    };
    setQuiz((prevState) => ({
      ...prevState,
      questions_answers: [...prevState.questions_answers, question],
    }));
  };

  return (
    <div>
      <h1>Create quiz</h1>
      <form>
        <input
          placeholder="Title"
          value={quiz.title}
          onChange={handleChangeQuiz}
          name="title"
        />
        <br />
        <textarea
          placeholder="Description"
          rows={7}
          value={quiz.description}
          onChange={handleChangeQuiz}
          name="description"
        />
        <br />
        <input
          type="number"
          placeholder="Score"
          value={quiz.score}
          onChange={handleChangeQuiz}
          name="score"
        />
        <br />
        <input
          placeholder="Youtube video"
          type="url"
          value={quiz.url}
          onChange={handleChangeQuiz}
          name="url"
        />
        <br />
        <div style={{ display: "flex", alignItems: "center" }}>
          <h3>Questions</h3>
          <button type="button" onClick={handleAddQuestion}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuizForm;
