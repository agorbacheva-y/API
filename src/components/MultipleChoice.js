import he from "he";

const MultipleChoice = ({ triviaQues, index, checked, setChecked }) => {
  // array of letters for multiple choice
  const letters = ["A", "B", "C", "D"];

  const onChangeValue = (e) => {
    setChecked(e.target.value);
  };
  console.log(checked)

  return (
    <div>
      {triviaQues[index].choices?.map((item, index) => 
        (
          <div key={index}>
            <button 
              className="multi-choice"
              type="button"
              value={item}
              onClick={onChangeValue}
            >
              <p>{letters[index]}. {he.decode(item)}</p>
            </button>
        </div>
      ))}
    </div>
  );
};

export default MultipleChoice;