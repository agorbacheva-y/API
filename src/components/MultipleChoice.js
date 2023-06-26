import { useState, useEffect } from "react";
import he from "he";
import Card from "react-bootstrap/Card";

const MultipleChoice = ({ triviaQues, index, checked, setChecked, correct, showCorrect }) => {
  // state for current choices
  const [ currentChoices, setCurrentChoices ] = useState([]);

  // state for shuffled choices
  const [ shuffledChoices, setShuffledChoices ] = useState([]);
 
  // array of letters for multiple choice
  const letters = ["A. ", "B. ", "C. ", "D. "];

  useEffect(() => {
    setCurrentChoices(triviaQues[index]?.choices);
  },[triviaQues, index]);

  function setChoices(currentChoices) {
    setShuffledChoices(currentChoices
      .map(value => ({ value, sort: Math.random() }))
      .sort(( a, b ) => a.sort - b.sort)
      .map(({ value }) => value)
      )
  };

  useEffect(() => {
    if (currentChoices) {
      setChoices(currentChoices)
    }
  },[currentChoices]);

  //console.log(currentChoices);
  //console.log(shuffledChoices);

  const handleClick = (e) => {
    setChecked(e.target.value);
  };
  console.log(checked);

  return (
    <Card.Body>
      <div className="multi-choice-container">
        {shuffledChoices.map((item, index) => 
          (
            <div key={index}>
              <button 
                type="button"
                className={ showCorrect && correct === item ? 'correct multi-choice' : 'multi-choice' }
                name={item}
                value={item}
                style={{ backgroundColor: checked === item ? "#F25C05" : null }}
                onClick={handleClick}
              >
                {letters[index]}{he.decode(item)}
              </button>
          </div>
        ))}
      </div>
    </Card.Body>
  );
};

export default MultipleChoice;

// put choices in array then shuffle

// fisher-yates shuffle
// const shuffle = (multiChoice) => {
//   for (var i = multiChoice.length - 1; i > 0; i--) {
//     var j = Math.floor(Math.random() * (i + 1));
//     [multiChoice[i], multiChoice[j]] = [multiChoice[j], multiChoice[i]];
//   }
//   return multiChoice;
// };


// correct === item ? "yellow" : null