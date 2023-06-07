import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";

const Score = () => {
  const navigate = useNavigate();

  const finalPoints = localStorage.getItem("points");
  console.log(finalPoints);

  function clearPoints(e) {
    e.preventDefault();
    //localStorage.removeItem("points");
    localStorage.clear();
    navigate("/"); 
  };

  return (
    <div>
      <h1>Your score</h1> 
        {finalPoints}
        {/* <p>{points} out of {triviaQues}</p> */}
        <Button
          variant="primary"
          onClick={clearPoints}
        >
        Close
        </Button> 
    </div>
  );
};

export default Score;

// cant pass points state via useLocation