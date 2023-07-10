import quiz from "../images/quiz.png";
import SetLevel from "./SetLevel";

const Home = () => {
  return (
    <div className="container home">
      <div className="logo-container">
        <img src={quiz} alt="quiz logo" className="quiz-img" />
        <h1 className="title">Trivia Quiz</h1>
      </div>
      
      <div className="level-container">
        <SetLevel />
      </div>
    </div>
  );
};

export default Home;

// attribute for logo
// <a href="https://www.flaticon.com/free-icons/quiz" title="quiz icons">Quiz icons created by Freepik - Flaticon</a>