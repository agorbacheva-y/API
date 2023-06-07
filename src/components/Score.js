import { useNavigate, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Score = () => {
  const navigate = useNavigate();
  const location = useLocation();

  let points = location.state.points;
  //let triviaQues = location.state.triviaQues;

  console.log(points);
  
  return (
    <div>
      <h1>Your score</h1> 
        {points}
        {/* <p>{points} out of {triviaQues}</p> */}
        <Button
          variant="primary"
          onClick={() => {navigate("/")}}
        >
        Close
        </Button> 
    </div>
  );
};

export default Score;

// cant pass points state via useLocation