import { useState, useEffect } from "react";
import he from "he";
import Card from "react-bootstrap/Card";

const TriviaRequest = () => {
  // state for storing response from API (array of objects)
  const [ trivia, setTrivia ] = useState([]);

  // state for storing questions from API response
  const [ question, setQuestion ] = useState([]);

  // state for showing question text
  const [ isShown, setIsShown ] = useState(false);

  // state for index of question shown
  const [ index, setIndex ] = useState(0);

  const fetchTrivia = async () => {
    const response = await fetch("https://opentdb.com/api.php?amount=5&category=10&difficulty=medium&type=multiple");
    const data = await response.json();
    setTrivia(data.results);
    
    //console.log(trivia); // returns empty array, then several minutes later returns response
    //console.log(data); // returns response immediately
  };

  // call function to set data
  useEffect(() => {
    fetchTrivia();
    setQuestion(trivia.map(({question: value}) => value ));
  },[]);

  console.log(question);

  let text = "";
  text = question[index];
  //console.log(text);

  function showNext() {
    setIndex(index +1)
    text = question[index];
    console.log(text);
    
    if (index === question.length -1) {
      setIndex(0);
    }
    
    return text;
  };

  // function to show card with question
  const handleClick = (e) => {
    e.preventDefault();
    setIsShown(true);
  };

  return (
    <>
      <h1>Trivia Quiz</h1>
      <Card body>
        <button
          onClick={handleClick}
        >
          Start
        </button>

        <p>{index +1} of {question.length}</p>

        <button
          onClick={showNext}>
          Next
        </button>
      </Card>

      {isShown && (
        <Card body>
          {text}
        </Card>
      )}
    </>
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

  // let n = Math.floor(Math.random() * trivia.length);
  // let text = "";
  // text = trivia[n];

  // console.log(text);