import { useState } from "react";
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
              <div key={index} className="multi-choice-container">

                  <button 
                    className="multi-choice"
                    type="button"
                    value={item}
                    onClick={onChangeValue}
                  >
                    {he.decode(item)}
                  </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MultipleChoice;