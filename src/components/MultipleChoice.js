import { useState, useEffect} from "react";
import he from "he";
import Questions from "./Questions";

const MultipleChoice = ({ trivia, index, setIndex }) => {
  // state for multiple choice answers and question
  const [ multiChoice, setMultiChoice ] = useState([]);

  // state for incorrect and correct answers
  const [ incorrect, setIncorrect ] = useState([]);
  const [ correct, setCorrect ] = useState([]);
  const [ choices, setChoices ] = useState([]);

  // state for storing current set of multiple choice
  const [ currentChoice, setCurrentChoice ] = useState([]);

  // state for selected radio option
  const [ checked, setChecked ] = useState("");

  // state for points
  const [ points, setPoints ] = useState(0);

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
    setIncorrect(multiChoice.map(({incorrect_answers}) => incorrect_answers)); //he.decode doesn't work here???
    setCorrect(multiChoice.map(({correct_answer}) => he.decode(correct_answer)));
  },[multiChoice]);
  
  useEffect(() => {
    setChoices(incorrect.map((item, index) => ([
      ...item, correct[index]
    ]) ));
  },[incorrect]);
 
  useEffect(() => {
    setCurrentChoice(choices[index]);
  },[choices]);
  //console.log(currentChoice);

  // function to check correct answer
  const checkAnswer = () => {
    if (checked === correct[index]) {
      alert("Correct!");
      setPoints((prev) => prev + 1);
    } else {
      alert("Try again");
    }
  };

  const onChangeValue = (e) => {
    setChecked(e.target.value, checkAnswer());
  };

  //console.log(checked)
  //console.log(correct[index])
  console.log(points);

  return (
    <div>
      <Questions 
        trivia={trivia} 
        index={index} 
        setIndex={setIndex}
        choices={choices}
        currentChoice={currentChoice}
        setCurrentChoice={setCurrentChoice}
        setChecked={setChecked}
      />
      <div>
          {currentChoice?.map((item, index) => 
            (
              <div key={index} >
                <label 
                  htmlFor={item.id}
                  className="multi-choice">
                  <input 
                    name="answer"
                    id={item.id}
                    type="radio"
                    defaultValue={currentChoice[index]}
                    checked={checked === currentChoice[index]}
                    onChange={onChangeValue}
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