import { useState, useEffect} from "react";
import he from "he";
import Questions from "./Questions";

const MultipleChoice = ({ triviaQues, index, setIndex }) => {
  // state for selected radio option
  const [ checked, setChecked ] = useState("");

  const onChangeValue = (e) => {
    setChecked(e.target.value);
  };
  console.log(checked)

  return (
    <div>
      <Questions 
        triviaQues={triviaQues} 
        index={index} 
        setIndex={setIndex}
        setChecked={setChecked}
        checked={checked}
      />
      <div>
          {triviaQues[index].choices?.map((item, index) => 
            (
              <div key={index} >
                <label 
                  htmlFor={item.id}
                  className="multi-choice">
                  <input 
                    name="answer"
                    id={item.id}
                    type="radio"
                    defaultValue={item}
                    checked={checked === item}
                    onChange={onChangeValue}
                  />
                  <p className="radio-choice">{item}</p>
                </label>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MultipleChoice;