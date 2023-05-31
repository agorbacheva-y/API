import 'bootstrap/dist/css/bootstrap.min.css';
import FetchApi from './components/FetchApi';
import QuizButton from "./components/QuizButton";

function App() {
  return (
    <div>
      <QuizButton />
      <FetchApi />
    </div>
  );
}

export default App;
