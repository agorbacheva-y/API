import Button from "react-bootstrap/Button";

const QuizButton = ({ questions, currentQuestion, index, setIndex, multipleChoice, currentChoice }) => {
  
  // functions for prev and next buttons
  function showNext() {
    setIndex(index + 1)
    //console.log(currentQuestion);
    
    if (index === questions.length - 1) {
      setIndex(0);
      return currentQuestion;
    }

    if (index === multipleChoice.length - 1) {
      setIndex(0);
      return currentChoice;
    }
  };

  function showPrev() {
    setIndex(index - 1)
    //console.log(currentQuestion);

    if (index === 0) {
      setIndex(questions.length - 1);
      return currentQuestion;
    };

    if (index === 0) {
      setIndex(multipleChoice.length - 1);
      return currentChoice;
    }
  };

  return (
    <div className="btn-container">
      <Button
        onClick={showPrev}>
        Previous
      </Button>

      <p>{index +1} of {questions.length}</p>

      <Button
        onClick={showNext}>
        Next
      </Button>
    </div>
  );
};

export default QuizButton;