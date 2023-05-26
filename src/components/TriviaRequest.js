import { useState, useEffect } from "react";
import he from "he";
import Card from "react-bootstrap/Card";

const TriviaRequest = () => {
  // state for storing response from API (array of objects)
  const [ trivia, setTrivia ] = useState([]);

  // state for showing question text
  const [ isShown, setIsShown ] = useState(false);

  const fetchTrivia = async () => {
    const response = await fetch("https://opentdb.com/api.php?amount=5&category=10&difficulty=medium&type=multiple");
    const data = await response.json();
    setTrivia(data.results);
    
    console.log(trivia); // returns empty array, then several minutes later returns response
    console.log(data); // returns response immediately
  };

  // call function to set data
  useEffect(() => {
    fetchTrivia();
  },[]);

  let newQuestion = trivia.map(({question: value}) => value );
  console.log(newQuestion);

  let n = Math.floor(Math.random() * newQuestion.length);
  let text = "";
  text = newQuestion[n];
  console.log(text);

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