import { useState } from "react";
import he from "he";

const MultipleChoice = ({ trivia }) => {
  // state for index of choices shown
  const [ index, setIndex ] = useState(0);

  const incorrect = trivia.map(({incorrect_answers}) => incorrect_answers);
  //console.log(incorrect);

  const correct = trivia.map(({correct_answer}) => correct_answer);
  //console.log(correct);

  let multipleChoice = incorrect.map((item, index) => ([
    ...item, correct[index]
  ]) );
  //console.log(multipleChoice);

  let currentChoice = multipleChoice[index];
  //console.log(currentChoice);

  return (
    <div>
      <ul>
        {currentChoice.map((item, i) => 
          <li key={i}>{currentChoice[i]}</li>
        )}
      </ul>
    </div>
  );
};

export default MultipleChoice;