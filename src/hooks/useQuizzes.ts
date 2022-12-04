import { useContext } from "react";
import { QuizzesContext } from "src/contexts/QuizziesContext";

const useQuizzes = () => useContext(QuizzesContext);

export default useQuizzes;
