import { useState, useEffect } from "react";
import TriviaCard from "./TriviaCard";
import he from "he";

const TriviaFetch = () => {
  // state for storing response from API (array of objects)
  const [ trivia, setTrivia ] = useState([]);

  // state for loading response from API
  const [ loading, setLoading ] = useState(false);

  // state for storing questions from API response (array of elements)
  const [ question, setQuestion ] = useState([]);  

  const fetchTrivia = async () => {
    setLoading(true);

    let response = await fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple");
    const data = await response.json();
    setTrivia(data.results);
    setLoading(false);

    if (trivia === []) {
      alert("no data");
    }
  };

  useEffect(() => {
    fetchTrivia();
    setQuestion(trivia.map(({question: value}) => he.decode(value) ));
  },[]);

  console.log(trivia);
  console.log(question);

  return (
    <div className="container">
      <TriviaCard  question={question} />
    </div>
  );
};

export default TriviaFetch;