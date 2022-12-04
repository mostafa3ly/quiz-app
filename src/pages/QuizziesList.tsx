import { FC } from "react";
import { Link } from "react-router-dom";
import Table from "src/components/Table";

const QuizziesList: FC = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Quizzes</h1>
        <Link to="/create">Create quiz</Link>
      </div>
      <Table />
    </div>
  );
};

export default QuizziesList;
