import { QuizzesProvider } from "./contexts/QuizziesContext";
import AppRoutes from "./routes";

function App() {
  return (
    <div className="App">
      <QuizzesProvider>
        <AppRoutes />
      </QuizzesProvider>
    </div>
  );
}

export default App;
