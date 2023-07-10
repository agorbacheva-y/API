import { Routes, Route, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import EasyTrivia from "./components/EasyTrivia";
import MedTrivia from "./components/MedTrivia";
import Score from "./components/Score";
import DifficultTrivia from "./components/DifficultTrivia";
import Trivia from "./components/Trivia";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/easytrivia" exact element={<EasyTrivia /> } />
        <Route path="/medtrivia" exact element={<MedTrivia />} />
        <Route path="/difficulttrivia" exact element={<DifficultTrivia />} />
        <Route path="/trivia" exact element={<Trivia />} />
        <Route path="/score" exact element={<Score />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
