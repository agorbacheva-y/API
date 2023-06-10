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
      
      <h1>Your score</h1> 
        <p>{finalPoints} out of {triviaQues.length}</p>
        <Button
          type="button"
          variant="primary"
          onClick={() => navigate("/")}
        >
        Close
        </Button> 
    </div>
  );
};

export default Score;

// attribute for star image
// <a href="https://www.flaticon.com/free-icons/star" title="star icons">Star icons created by Pixel perfect - Flaticon</a>