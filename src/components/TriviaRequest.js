import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

const TriviaRequest = () => {
  const [ trivia, setTrivia ] = useState([]);
  
  const fetchTrivia = async () => {
    const response = await fetch("https://opentdb.com/api.php?amount=5&category=10&difficulty=medium&type=multiple");
    const data = await response.json();
    
    setTrivia(data.results);
    
    console.log(trivia); // returns empty array
    console.log(data); // returns array with response
  };

  // call function to see data
  useEffect(() => {
    fetchTrivia();
  },[]);

  return (
    <>
      <h1>Trivia Quiz</h1>
      <Card body>
        <p>{trivia.question}</p>
      </Card>
    </>
  );
};

export default TriviaRequest;

// https://opentdb.com/api_config.php 