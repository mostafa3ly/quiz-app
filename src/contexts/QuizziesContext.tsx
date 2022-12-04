import { createContext, FC, ReactNode, useReducer } from "react";
import { Quiz } from "src/interfaces/Quiz";

interface QuizzesContextState {
  quizzes: Quiz[];
}

interface QuizzesContextValue extends QuizzesContextState {}

const QuizzesContext = createContext<QuizzesContextValue>({
  quizzes: [],
});

const initialState: QuizzesContextState = { quizzes: [] };

const reducer = (state: QuizzesContextState): QuizzesContextState => {
  return { ...state };
};

interface QuizzesContextProviderProps {
  children: ReactNode;
}

const QuizzesProvider: FC<QuizzesContextProviderProps> = ({ children }) => {
  const [state] = useReducer(reducer, initialState);

  return (
    <QuizzesContext.Provider value={{ quizzes: state.quizzes }}>
      {children}
    </QuizzesContext.Provider>
  );
};

export { QuizzesContext, QuizzesProvider };
