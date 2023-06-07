import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Score = () => {
  const navigate = useNavigate();

  const finalPoints = localStorage.getItem("points");
  console.log(finalPoints);

  return (
    <div>
      <h1>Your score</h1> 
        {finalPoints}
        {/* <p>{points} out of {triviaQues}</p> */}
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