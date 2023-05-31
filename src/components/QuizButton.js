import { useState } from "react";
import Button from "react-bootstrap/Button";

const QuizButton = ({ question, loading }) => {
  // state for index of question shown
  const [ index, setIndex ] = useState(0);

  // state for showing question text
  const [ isShown, setIsShown ] = useState(false);

  // functions for prev and next buttons
  function showNext() {
    setIndex(index + 1)
    let currentQuestion = question[index];
    //console.log(currentQuestion);
    
    if (index === question.length - 1) {
      setIndex(0);
      return currentQuestion;
    }
  };

  function showPrev() {
    setIndex(index - 1)
    let currentQuestion = question[index];
    //console.log(currentQuestion);

    if (index === 0) {
      setIndex(question.length - 1);
      return currentQuestion;
    };
  };

  // function to show card with question
  const handleClick = (e) => {
    e.preventDefault();
    setIsShown(true);
  };

  return (
    <div>
      <Button
        variant="info"
        onClick={handleClick}
      >
        {loading ? <p>Loading...</p> : <p>Start</p>}
      </Button>

      <div className="btn-container">
        <Button
          onClick={showPrev}>
          Previous
        </Button>

        <p>{index +1} of {question.length}</p>

        <Button
          onClick={showNext}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default QuizButton;