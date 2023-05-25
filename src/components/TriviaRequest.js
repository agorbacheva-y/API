import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

const TriviaRequest = () => {
  const [ trivia, setTrivia ] = useState([]);
  
  const fetchTrivia = async () => {
    const response = await fetch("https://opentdb.com/api.php?amount=5&category=10&difficulty=medium&type=multiple");
    const data = await response.json();
    
    setTrivia(data.results);
    
    console.log(trivia); // returns empty array, then few minutes later returns response
    console.log(data); // returns response immediately
  };

  // call function to see data
  useEffect(() => {
    fetchTrivia();
  },[]);

  return (
    <>
      <h1>Trivia Quiz</h1>
      <Card body>
        {trivia.map((question, i) => (
          <p key={i}>{trivia.question}</p>
        ))}
      </Card>
    </>
  );
};

export default TriviaRequest;

// https://opentdb.com/api_config.php 

// want to save response in array and map through array
// to render one question at a time
