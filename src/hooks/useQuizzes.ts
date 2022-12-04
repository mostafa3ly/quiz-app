import { useContext } from "react";
import { QuizzesContext } from "src/contexts/QuzziesContext";

const useQuizzes = () => useContext(QuizzesContext);

export default useQuizzes;
