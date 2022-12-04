import { createContext, FC, ReactNode, useReducer } from "react";
import { Quiz } from "src/interfaces/Quiz";

interface QuizzesContextState {
  quizzes: Quiz[];
}

interface QuizzesContextValue extends QuizzesContextState {
  addQuiz: (quiz: Quiz) => void;
}

const QuizzesContext = createContext<QuizzesContextValue>({
  quizzes: [],
  addQuiz: () => {},
});

const initialState: QuizzesContextState = { quizzes: [] };

enum ActionType {
  addQuiz,
}

type AddQuizActionType = {
  type: ActionType.addQuiz;
  payload: {
    quiz: Quiz;
  };
};

type QuizzesContextAction = AddQuizActionType;

const reducer = (
  state: QuizzesContextState,
  action: QuizzesContextAction
): QuizzesContextState => {
  switch (action.type) {
    case ActionType.addQuiz:
      return { ...state, quizzes: [...state.quizzes, action.payload.quiz] };

    default:
      return { ...state };
  }
};

interface QuizzesContextProviderProps {
  children: ReactNode;
}

const QuizzesProvider: FC<QuizzesContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addQuiz = (quiz: Quiz): void => {
    dispatch({ type: ActionType.addQuiz, payload: { quiz } });
  };

  return (
    <QuizzesContext.Provider value={{ quizzes: state.quizzes, addQuiz }}>
      {children}
    </QuizzesContext.Provider>
  );
};

export { QuizzesContext, QuizzesProvider };
