import { Routes, Route, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Score from "./components/Score";
import Trivia from "./components/Trivia";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trivia" exact element={<Trivia />} />
        <Route path="/score" exact element={<Score />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;