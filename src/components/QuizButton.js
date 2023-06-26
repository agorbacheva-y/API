import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Points from "./Points";

const QuizButton = ({ triviaQues, index, setIndex, checked, setChecked, correct, setColorOfCorrect }) => {
  // state for points
  const [ points, setPoints ] = useState(0);

  // state for overlay with final points
  const [ show, setShow ] = useState(false);

  const navigate = useNavigate();

  // function to check correct answer
  const checkAnswer = () => {
    if (checked === correct) {
      setPoints((prev) => prev + 1);
    }
  };

  // functions for check and next buttons
  function showCorrect() {
    setColorOfCorrect(true);
  }

  function showNext() {  
    checkAnswer();
    setIndex(prev => prev + 1);
    setChecked(null);
    setColorOfCorrect(false);

    if (index === triviaQues.length - 1) {
      //setShow(true);
      navigate("/score", { state: {triviaQues} });
      setIndex(0);
    }
  };

  useEffect(() => {
    localStorage.setItem("points", points);
  },[points]);

  console.log(`current points: ${points}`);

  return (
    <div>
      <div className="btn-container">
        <button
          className="next-btn"
          onClick={showCorrect}
        >
          Check
        </button>

        <p>{index + 1} of {triviaQues.length}</p>

        <button
          className="next-btn"
          onClick={showNext}
          disabled={!checked}
        >
          Next
        </button>
      </div>

      <div>
        {show && (
          <Points points={points} setShow={setShow} triviaQues={triviaQues} />
        )}
      </div>
    </div>
  );
};

export default QuizButton;

// prev btn messes up the points system...