import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

const TriviaRequest = () => {
  const [ trivia, setTrivia ] = useState([]);
  let triviaQuestions = [];

  const fetchTrivia = async () => {
    let response = await fetch("https://opentdb.com/api.php?amount=5&category=10&difficulty=medium&type=multiple");
    const data = await response.json();
    triviaQuestions = data.results;
    console.log(triviaQuestions);
  };

  // call function to see data
  useEffect(() => {
    fetchTrivia();
  },[]);

  return (
    <>
      <h1>Trivia Quiz</h1>
      <Card body>
        {triviaQuestions.map((quesiton,i) => {
          <p key={i}>question</p>
        })}
      </Card>
    </>
  );
};

export default TriviaRequest;

// https://opentdb.com/api_config.php 