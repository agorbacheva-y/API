import { useState, useEffect } from "react";
import he from "he";
import Card from "react-bootstrap/Card";

const TriviaRequest = () => {
  const [ trivia, setTrivia ] = useState([]);
  
  const fetchTrivia = async () => {
    const response = await fetch("https://opentdb.com/api.php?amount=5&category=10&difficulty=medium&type=multiple");
    const data = await response.json();
    
    setTrivia(data.results);
    
    //console.log(trivia); // returns empty array, then several minutes later returns response
    //console.log(data); // returns response immediately
  };

  // call function to see data
  useEffect(() => {
    fetchTrivia();
  },[]);

  let n = Math.floor(Math.random() * trivia.length);
  let text = "";
  text = trivia[n]?.question; // ? checks if trivia array exists, then executes
  // console.log(text);

  return (
    <>
      <h1>Trivia Quiz</h1>
      <Card body>
        {text}
      </Card>
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

// he.decode doesnt work now???