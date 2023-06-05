import he from "he";

const MultipleChoice = ({ triviaQues, index, checked, setChecked }) => {
  // array of letters for multiple choice
  const letters = ["A", "B", "C", "D"];

  const onChangeValue = (e) => {
    setChecked(e.target.value);
    console.log(e.target.value)
  };
  console.log(checked);

  return (
    <div>
      {triviaQues[index].choices?.map((item, index) => 
        (
          <div key={index} className="multi-choice">
            <label>
              <input 
                type="radio"
                name={item}
                value={item}
                onChange={onChangeValue}
                checked={checked === item}
              />
              <p >{letters[index]}. {he.decode(item)}</p>
            </label>
        </div>
      ))}
    </div>
  );
};

export default MultipleChoice;