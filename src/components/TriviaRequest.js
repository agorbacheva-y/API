import { useState, useEffect } from "react";
import he from "he";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Shuffle from "./Shuffle";

const TriviaRequest = () => {
  // state for storing response from API (array of objects)
  const [ trivia, setTrivia ] = useState([]);

  // state for storing questions from API response
  const [ question, setQuestion ] = useState([]);

  // state for storing incorrect answers
  const [ incorrect, setIncorrect ] = useState([]);

  // state for storing correct answers
  const [ correct, setCorrect ] = useState([]);

  // state for storing multiple choices
  const [ choices, setChoices ] = useState([]);

  // state for loading response from API
  const [ loading, setLoading ] = useState(false);

  // state for showing question text
  const [ isShown, setIsShown ] = useState(false);

  // state for index of question shown
  const [ index, setIndex ] = useState(0);


  const fetchTrivia = async () => {
    setLoading(true);

    let response = await fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple");
    const data = await response.json();
    setTrivia(data.results);
    setLoading(false);

    if (!trivia) {
      alert("no data");
    }
  };

  useEffect(() => {
    fetchTrivia();
    setQuestion(trivia.map(({question: value}) => he.decode(value) ));
    setIncorrect(trivia.map(({incorrect_answers: value}) => he.decode(value) ));
    setCorrect(trivia.map(({correct_answer: value}) => he.decode(value) ));

    // create array of multiple choices
    setChoices(incorrect.map((item, index) => ([
      ...item, correct[index]])
    ));
    //console.log(choices);

  },[]);

  let text = "";
  text = question[index];
  
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
              <Shuffle choices={choices}/>
            </ul>
          </Card>
        </div>
      )}
    </div>
  );
};

export default TriviaRequest;

// https://opentdb.com/api_config.php 

/* maps through to show all questions in array
{trivia.map((q, i) => (
  <p key={i}>{he.decode(q.question)}</p>
))}
*/

  //text = trivia[n]?.question; // ? checks if trivia array exists, then executes

// data wont load until i manipulate console.log somehwere
// so need to comment out shuffle function or get an error as array is undefined