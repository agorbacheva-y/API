import { useNavigate, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import star from "../images/star.png";

const Score = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const finalPoints = localStorage.getItem("points");
  console.log(finalPoints);

  const triviaQues = location.state.triviaQues;


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
          onClick={() => navigate("/")}
        >
          Take New Quiz
        </button> 
      </div>
      
    </div>
  );
};

export default Score;

// attribute for star image
// <a href="https://www.flaticon.com/free-icons/star" title="star icons">Star icons created by Pixel perfect - Flaticon</a>