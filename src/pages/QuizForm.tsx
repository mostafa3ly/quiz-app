import { ChangeEvent, FC, useState } from "react";
import { Quiz } from "src/interfaces/Quiz";
import { Question } from "src/interfaces/Question";
import QuestionItem from "src/components/QuestionItem";

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

  const handleAddAnswer = (id: number): void => {
    setQuiz((prevState) => ({
      ...prevState,
      questions_answers: prevState.questions_answers.map((question) =>
        question.id === id
          ? {
              ...question,
              answers: [
                ...question.answers.map((answer) => ({
                  ...answer,
                  is_true: false,
                })),
                { id: Date.now(), is_true: true, text: "" },
              ],
            }
          : question
      ),
    }));
  };

  const handleChangeQuestion = (
    e: ChangeEvent<HTMLInputElement>,
    id: number
  ): void => {
    const { name, value } = e.target;
    setQuiz((prevState) => ({
      ...prevState,
      questions_answers: prevState.questions_answers.map((question) =>
        question.id === id ? { ...question, [name]: value } : question
      ),
    }));
  };

  const handleChangeAnswer = (
    e: ChangeEvent<HTMLInputElement>,
    id: number,
    questionId: number
  ): void => {
    const { name, value } = e.target;
    setQuiz((prevState) => ({
      ...prevState,
      questions_answers: prevState.questions_answers.map((question) =>
        question.id === questionId
          ? {
              ...question,
              answers: question.answers.map((answer) =>
                name === "is_true"
                  ? { ...answer, is_true: answer.id === id }
                  : answer.id === id
                  ? { ...answer, [name]: value }
                  : answer
              ),
            }
          : question
      ),
    }));
  };

  const renderQuestions = (): JSX.Element[] =>
    quiz.questions_answers.map((question) => (
      <QuestionItem
        key={question.id}
        onAddAnswer={handleAddAnswer}
        onChangeQuestion={handleChangeQuestion}
        question={question}
        onChangeAnswer={handleChangeAnswer}
      />
    ));

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
          <h3>Questions</h3>&nbsp;&nbsp;&nbsp;
          <button type="button" onClick={handleAddQuestion}>
            Add
          </button>
        </div>
        {renderQuestions()}
      </form>
    </div>
  );
};

export default QuizForm;
