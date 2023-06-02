import { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";

const QuizButton = ({ questions, setCurrentQuestion, index, setIndex, choices, setCurrentChoice, setChecked }) => {
  useEffect(() => {
    setCurrentQuestion(questions[index]);
    setCurrentChoice(choices[index]);
  },[questions, choices, index])

  // functions for prev and next buttons
  function showNext() {
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