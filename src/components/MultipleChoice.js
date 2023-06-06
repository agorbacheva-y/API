import he from "he";

const MultipleChoice = ({ triviaQues, index, checked, setChecked }) => {
  // array of letters for multiple choice
  const letters = ["A", "B", "C", "D"];

  const onChangeValue = (e) => {
    setChecked(e.target.value);
  };
  console.log(checked);

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
              onClick={onChangeValue}
              checked={checked === item}
            >
              <span className="multi-choice_letters">{letters[index]}.</span>
              <span>{he.decode(item)}</span>
            </button>
        </div>
      ))}
    </div>
  );
};

export default MultipleChoice;