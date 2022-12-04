import { FC } from "react";
import Table from "src/components/Table";

const QuzziesList: FC = () => {
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
        <a href="/create">Create quiz</a>
      </div>
      <Table />
    </div>
  );
};

export default QuzziesList;
