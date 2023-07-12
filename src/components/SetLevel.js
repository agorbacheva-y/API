import { useNavigate } from "react-router-dom";
import LevelButton from "./LevelButton";

const SetLevel = () => {
  let navigate = useNavigate();

  const setEasy = () => {
    localStorage.setItem("url", "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple");
    localStorage.setItem("level", "Easy");
    navigate("/trivia");
  };

  const setMed = () => {
    localStorage.setItem("url", "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple");
    localStorage.setItem("level", "Medium");
    navigate("/trivia");
  };

  const setDiff = () => {
    localStorage.setItem("url", "https://opentdb.com/api.php?amount=10&category=9&difficulty=difficult&type=multiple");
    localStorage.setItem("level", "Difficult");
    navigate("/trivia");
  };

  return (
    <div className="level-container">
      <LevelButton onClick={setEasy}>Easy</LevelButton>
      <LevelButton onClick={setMed}>Medium</LevelButton>
      <LevelButton onClick={setDiff}>Difficult</LevelButton>
    </div>
  );
};

export default SetLevel;