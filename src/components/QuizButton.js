import { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";

const QuizButton = ({ questions, currentQuestion, setCurrentQuestion, index, setIndex, choices, currentChoice, setCurrentChoice }) => {
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
    console.log(index) // first click doesnt change text, works from second click???

  };

  function showPrev() {
    if (index === 0) {
      setIndex(questions.length - 1);
    } else {
      setIndex(prev => prev - 1);
    }
  };

  //console.log(questions[index]);
  //console.log(choices[index]);

  return (
    <div className="btn-container">
      <Button
        onClick={showPrev}>
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