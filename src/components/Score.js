import { useNavigate, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Score = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const finalPoints = localStorage.getItem("points");
  console.log(finalPoints);

  const triviaQues = location.state.triviaQues;


  return (
    <div>
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

// cant pass points state via useLocation