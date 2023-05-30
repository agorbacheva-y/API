import { useState, useEffect } from "react";
import he from "he";

const TriviaQuestion = ({ trivia, index }) => {
  // state for storing incorrect answers
  const [ incorrect, setIncorrect ] = useState([]);

  // state for storing correct answers
  const [ correct, setCorrect ] = useState([]);

  // state for storing multiple choices
  const [ choices, setChoices ] = useState([]);

  setIncorrect(trivia.map(({incorrect_answers: value}) => he.decode(value) ));
  setCorrect(trivia.map(({correct_answer: value}) => he.decode(value) ));
  setChoices(incorrect.map((item, index) => ([
    ...item, correct[index]])
    ));
  
  console.log(choices);
  let multipleChoice = choices[index];

  return (
    <div>
      <p>{multipleChoice}</p>
      {/* {multipleChoice.map((i) => 
        <li key={i}>{multipleChoice[i]}</li>
      )} */}
    </div> 
  );
};

export default TriviaQuestion;