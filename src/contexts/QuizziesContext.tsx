import { createContext, FC, ReactNode, useReducer } from "react";
import { Quiz } from "src/interfaces/Quiz";

interface QuizzesContextState {
  quizzes: Quiz[];
}

interface QuizzesContextValue extends QuizzesContextState {
  addQuiz: (quiz: Quiz) => void;
  editQuiz: (quiz: Quiz) => void;
}

const QuizzesContext = createContext<QuizzesContextValue>({
  quizzes: [],
  addQuiz: () => {},
  editQuiz: () => {},
});

const initialState: QuizzesContextState = { quizzes: [] };

enum ActionType {
  addQuiz,
  editQuiz,
}

type QuizzesContextAction = {
  type: ActionType.addQuiz | ActionType.editQuiz;
  payload: {
    quiz: Quiz;
  };
};

const reducer = (
  state: QuizzesContextState,
  action: QuizzesContextAction
): QuizzesContextState => {
  switch (action.type) {
    case ActionType.addQuiz:
      return { ...state, quizzes: [...state.quizzes, action.payload.quiz] };
    case ActionType.editQuiz:
      return {
        ...state,
        quizzes: state.quizzes.map((quiz) =>
          quiz.id === action.payload.quiz.id ? action.payload.quiz : quiz
        ),
      };

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
  const editQuiz = (quiz: Quiz): void => {
    dispatch({ type: ActionType.editQuiz, payload: { quiz } });
  };

  return (
    <QuizzesContext.Provider
      value={{ quizzes: state.quizzes, addQuiz, editQuiz }}
    >
      {children}
    </QuizzesContext.Provider>
  );
};

export { QuizzesContext, QuizzesProvider };
