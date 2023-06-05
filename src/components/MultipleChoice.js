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
          <div key={index}>
            <button 
              type="button"
              className="multi-choice"
              name={item}
              value={item}
              onClick={onChangeValue}
              checked={checked === item}
              style={{
                backgroundColor: checked === item ? "#F25C05" : "rgb(88, 85, 85)"
              }}
            >
              {letters[index]}. {he.decode(item)}
            </button>
        </div>
      ))}
    </div>
  );
};

export default MultipleChoice;