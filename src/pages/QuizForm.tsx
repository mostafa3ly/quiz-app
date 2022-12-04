import { FC } from "react";

const QuizForm: FC = () => {
  return (
    <div>
      <h1>Create quiz</h1>
      <form>
        <input placeholder="Title" />
        <br />
        <textarea placeholder="Description" rows={7} />
        <br />
        <input type="number" placeholder="Score" />
        <br />
        <input placeholder="Youtube video" type="url" />
        <br />
      </form>
    </div>
  );
};

export default QuizForm;
