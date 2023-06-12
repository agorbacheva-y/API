import { Link, useNavigate } from "react-router-dom";
import quiz from "../images/quiz.png";
import LevelButton from "./LevelButton";

const Home = () => {
  let navigate = useNavigate();

  return (
    <div className="container">
      <div className="logo-container">
        <img src={quiz} alt="quiz logo" className="quiz-img" />
        <h1 className="title">Trivia Quiz</h1>
      </div>
      
      <div className="level-container">
        <LevelButton onClick={() => navigate("/easytrivia")}>Easy</LevelButton>
        <LevelButton onClick={() => navigate("/medtrivia")}>Medium</LevelButton>
        <LevelButton onClick={() => navigate("/difficulttrivia")}>Difficult</LevelButton>
      </div>
    </div>
  );
};

export default Home;

// attribute for logo
// <a href="https://www.flaticon.com/free-icons/quiz" title="quiz icons">Quiz icons created by Freepik - Flaticon</a>