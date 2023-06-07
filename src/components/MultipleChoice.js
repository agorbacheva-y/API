import { useEffect } from "react";
import he from "he";
//import Shuffle from "./Shuffle";

const MultipleChoice = ({ triviaQues, index, checked, setChecked }) => {
  // array of letters for multiple choice
  const letters = ["A", "B", "C", "D"];

  const handleClick = (e) => {
    setChecked(e.target.value);
    
  };
  console.log(checked);

  // useEffect(() => {
  //   Shuffle(triviaQues.choices);
  // },[]);


  return (
    <div>
      {triviaQues[index].choices?.map((item, index) => 
        (
          <div key={index}>
            <button 
              type="button"
              className="multi-choice"
              name={item}
              value={item}
              style={{ backgroundColor: checked === item ? "red" : null }}
              onClick={handleClick}
            >
              {letters[index]}.&nbsp;&nbsp;{he.decode(item)}
            </button>
        </div>
      ))}
    </div>
  );
};

export default MultipleChoice;

// put choices in array then shuffle