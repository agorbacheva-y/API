import { useState, useEffect} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Questions from "./Questions";
import MultipleChoice from "./MultipleChoice";

const FetchApi = () => {
  // state to store api data
  const [ trivia, setTrivia ] = useState([]);

  // state for loading data
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    const fetchTrivia = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple");
        const data = await response.json();
        setTrivia(data.results);
      } catch (error) {
        console.log(error.message);
      }    
        setLoading(false);
    };
      
    fetchTrivia();
  },[]);

  console.log(Array.isArray(trivia));

  return (
    <div>
      <Card body>
        <Questions trivia={trivia} />
        <MultipleChoice />
      </Card>
    </div>
  );
};

export default FetchApi;