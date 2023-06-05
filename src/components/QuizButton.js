import { useState } from "react";
import Button from "react-bootstrap/Button";
import Points from "./Points";

const QuizButton = ({ triviaQues, index, setIndex, setChecked, checked }) => {
  // state for points
  const [ points, setPoints ] = useState(0);

  // state for overlay with final points
  const [ show, setShow ] = useState(false);

  // function to check correct answer
  const checkAnswer = () => {
    if (checked === triviaQues[index].correct_answer) {
      setPoints((prev) => prev + 1);
    }
  };

  // functions for prev and next buttons
  function showNext() {
    checkAnswer();
    setIndex(prev => prev + 1);

    if (index === triviaQues.length - 1) {
      setShow(true);
      setIndex(0);
    }
  };

  // function showPrev() {
  //   if (index === 0) {
  //     setIndex(questions.length - 1);
  //   } else {
  //     setIndex(prev => prev - 1);
  //   }
  // };

  console.log(points);

  const resetValue = () => {
    setChecked(null);
  };
  
  return (
    <div>
      <div className="btn-container">
        {/* <Button
          onClick={() => (showPrev(), resetValue())}
        >
          Previous
        </Button> */}

        <p>{index + 1} of {triviaQues.length}</p>

        <Button
          onClick={() => (showNext(), resetValue())}
          disabled={!checked}
        >
          Next
        </Button>
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