import { useState, useEffect} from "react";
import he from "he";
import Questions from "./Questions";

const MultipleChoice = ({ trivia, index, setIndex }) => {
  // state for multiple choice answers and question
  const [ multiChoice, setMultiChoice ] = useState([]);

  // state for incorrect and correct answers
  const [ currentChoice, setCurrentChoice ] = useState([]);

  useEffect(() => {
    setMultiChoice(trivia.map(
      function(item) {
        delete item.category;
        delete item.difficulty;
        delete item.type;

        return item;
      }
    ))
  },[]);

  console.log(multiChoice);
  
  // data wont load if store incorrect and correct and choices in state???
  const incorrect = multiChoice.map(({incorrect_answers}) => incorrect_answers); //he.decode does not work here???
  const correct = multiChoice.map(({correct_answer}) => he.decode(correct_answer));
  let choices = incorrect.map((item, index) => ([
      ...item, correct[index]
    ]) );
  
  console.log(incorrect);
  console.log(correct);
  console.log(choices);
 
  useEffect(() => {
    setCurrentChoice(choices[index]);
  }, []);

  console.log(currentChoice);

  return (
    <div>
      <Questions 
        trivia={trivia} 
        index={index} 
        setIndex={setIndex}
        currentChoice={currentChoice}
      />
      <div>
          {currentChoice?.map((item, index) => 
            (
              <div key={index}>
                <input 
                  name="mltpl.choice"
                  id={item.id}
                  type="radio"
                />
                <label 
                  htmlFor="item.id" 
                  className="mltp-choice">
                  <p>{currentChoice[index]}</p>
                </label>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MultipleChoice;