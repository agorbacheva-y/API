import quiz from "../images/quiz.png";
import SetLevel from "./SetLevel";
import Credit from "./Credit";

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

      <footer>
        <Credit
          image="Quiz icon"
          artistName="Freepik" 
          url="https://www.flaticon.com/free-icons/quiz"
        >
          Flaticon
        </Credit>
      </footer>
    </div>
  );
};

export default Home;