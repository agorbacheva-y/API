import { useState, useEffect} from "react";
import he from "he";
import Questions from "./Questions";

const MultipleChoice = ({ trivia, index, setIndex }) => {
  // state for multiple choice answers and question
  const [ multiChoice, setMultiChoice ] = useState([]);

  // state for incorrect and correct answers
  const [ incorrect, setIncorrect ] = useState([]);
  const [ correct, setCorrect ] = useState([]);

  // state for selected radio option
  const [ checked, setChecked ] = useState("");

  useEffect(() => {
    setMultiChoice(trivia.map(
      function(item) {
        delete item.category;
        delete item.difficulty;
        delete item.type;

        return item;
      }
    ));
  },[]);

  useEffect(() => {
    setIncorrect(multiChoice.map(({incorrect_answers}) => incorrect_answers));
    setCorrect(multiChoice.map(({correct_answer}) => he.decode(correct_answer)));
  },[multiChoice]);
  
  let choices = incorrect.map((item, index) => ([
      ...item, correct[index]
    ]) );
  
  //console.log(incorrect);
  //console.log(correct);
  //console.log(choices);
 
  let currentChoice = choices[index];
  //console.log(currentChoice);

  const checkAnswer = () => {
    if (checked === correct[index]) {
      alert("correct!");
    } else {
      alert("incorrect");
    }
  };

  const onChangeValue = (e, index) => {
    setChecked(e.target.value);
    checkAnswer();
  };

  return (
    <div>
      <Questions 
        trivia={trivia} 
        index={index} 
        setIndex={setIndex}
        choices={choices}
        currentChoice={currentChoice}
      />
      <div>
          {currentChoice?.map((item, index) => 
            (
              <div key={index} onChange={onChangeValue} >
                <label 
                  htmlFor={item.id}
                  className="multi-choice">
                  <input 
                    name="answer"
                    id={item.id}
                    type="radio"
                    defaultValue={currentChoice[index]}
                  />
                  <p className="radio-choice">{currentChoice[index]}</p>
                </label>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MultipleChoice;