import he from "he";

const MultipleChoice = ({ triviaQues, index, checked, setChecked }) => {

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
              {he.decode(item)}
            </button>
        </div>
      ))}
    </div>
  );
};

export default MultipleChoice;