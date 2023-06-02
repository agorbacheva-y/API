import { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";

const QuizButton = ({ questions, setCurrentQuestion, index, setIndex, choices, setCurrentChoice, setChecked, checked, correct }) => {
  // state for points
  const [ points, setPoints ] = useState(0);
  
  useEffect(() => {
    setCurrentQuestion(questions[index]);
    setCurrentChoice(choices[index]);
  },[questions, choices, index])

  // function to check correct answer
  const checkAnswer = () => {
    if (checked === correct[index]) {
      setPoints((prev) => prev + 1);
    }
  };

  // functions for prev and next buttons
  function showNext() {
    checkAnswer();

    if (index === questions.length -1) {
      setIndex(0);
    } else {
      setIndex(prev => prev + 1);
    }
  };

  function showPrev() {
    if (index === 0) {
      setIndex(questions.length - 1);
    } else {
      setIndex(prev => prev - 1);
    }
  };

  console.log(points);

  const resetValue = () => {
    setChecked(null);
  }

  //console.log(questions[index]);
  //console.log(choices[index]);

  return (
    <div className="btn-container">
      <Button
        onClick={() => (showPrev(), resetValue())}>
        Previous
      </Button>

      <p>{index + 1} of {questions.length}</p>

      <Button
        onClick={showNext}>
        Next
      </Button>
    </div>
  );
};

export default QuizButton;