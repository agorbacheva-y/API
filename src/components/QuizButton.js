import Button from "react-bootstrap/Button";

const QuizButton = ({ questions, currentQuestion, setCurrentQuestion, index, setIndex, choices, currentChoice, setCurrentChoice }) => {
  
  // function to set current question and choices
  function showCurrent() {
      setCurrentQuestion(questions[index]);
      setCurrentChoice(choices[index]);
  };

  // functions for prev and next buttons
  function showNext() {
    setIndex(index + 1);
    
    if (index === questions.length - 1) {
      setIndex(0);
    }

    showCurrent();
  };

  function showPrev() {
    setIndex(index - 1)

    if (index === 0) {
      setIndex(questions.length - 1);
    }

    showCurrent();
  };

  console.log(questions[index]);
  console.log(choices[index]);

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