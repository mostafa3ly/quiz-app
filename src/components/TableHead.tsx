import { FC } from "react";

const TableHead: FC = () => {
  return (
    <thead>
      <tr>
        <th align="left">Title</th>
        <th align="left">Description</th>
        <th align="left">Questions</th>
        <th align="left">Score</th>
        <th align="left">Created At</th>
        <th align="left">Edit</th>
      </tr>
    </thead>
  );
};

export default TableHead;
