import { useNavigate, useLocation } from "react-router-dom";
import star from "../images/star.png";
import Credit from "./Credit";

const Score = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const finalPoints = localStorage.getItem("points");
  console.log(finalPoints);

  const triviaQues = location.state.triviaQues;

  const goHome = () => {
    navigate("/");
    localStorage.clear();
  };

  return (
    <div className="container">
      <div>
        <img src={star} alt="star" className="star-img" />
        <img src={star} alt="star" className="star-img" />
        <img src={star} alt="star" className="star-img" />
      </div>
      
      <h1 className="title">Your score</h1> 
      <h2><span className="points">{finalPoints}</span> out of {triviaQues.length}</h2>
      
      <div className="quiz-btn-container">
        <button
          type="button"
          className="quiz-btn"
          onClick={goHome}
        >
          Take New Quiz
        </button> 
      </div>
      
      <footer>
        <Credit
          image="Star icons"
          artistName="Pixel perfect" 
          url="https://www.flaticon.com/free-icons/star"
        >
          Flaticon
        </Credit>
      </footer>
    </div>
  );
};

export default Score;