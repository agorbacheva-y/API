import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
//import Shuffle from "./Shuffle";
import { useState } from "react";
import TriviaQuestion from "./TriviaQuestion";

const TriviaCard = ({ loading, question }) => {
  // state for showing question text
  const [ isShown, setIsShown ] = useState(false);

  // state for index of question shown
  const [ index, setIndex ] = useState(0);

  let text = question[index];
  console.log(text);

  // functions for prev and next buttons
  function showNext() {
    setIndex(index + 1)
    text = question[index];
    //console.log(text);
    
    if (index === question.length - 1) {
      setIndex(0);
      return text;
    }
  };

  function showPrev() {
    setIndex(index - 1)
    text = question[index];
    //console.log(text);

    if (index === 0) {
      setIndex(question.length - 1);
    return text;
    }
  };

  // function to show card with question
  const handleClick = (e) => {
    e.preventDefault();
    setIsShown(true);
  };

  return (
    <div className="container">
      <h1>Trivia Quiz</h1>
      <Button
        type="button"
        variant="info"
        onClick={handleClick}
        >
          {loading ? <p>Loading...</p> : <p>Start</p>}
      </Button>

      <div className="btn-container">
        <Button
          onClick={showPrev}>
          Previous
        </Button>

        <p>{index +1} of {question.length}</p>

        <Button
          onClick={showNext}>
          Next
        </Button>
      </div>

      {isShown && (
        <div>
          <Card body>
            {text}
          </Card>

          <Card body>
            <ul>
              <TriviaQuestion />
            </ul>
          </Card>
        </div>
      )}
    </div>
  );
};

export default TriviaCard;