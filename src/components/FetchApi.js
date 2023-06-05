import { useState, useEffect} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import MultipleChoice from "./MultipleChoice";

const FetchApi = () => {
  // state to store api data
  const [ trivia, setTrivia ] = useState([]);

  // state for loading data
  const [ loading, setLoading ] = useState(false);

  // state for storing question, correct, incorrect, nr
  const [ triviaQues, setTriviaQues ] = useState([]);

  // state for showing question text
  const [ isShown, setIsShown ] = useState(false);

  // state for index of choices shown
  const [ index, setIndex ] = useState(0);

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

  useEffect(() => {
    setTriviaQues(trivia.map(({category, difficulty, type, ...keepAttrs}) => keepAttrs));
  },[trivia]);

  useEffect(() => {
    triviaQues.forEach((object, i) =>
      object.number = i + 1);
    triviaQues.forEach((object) => 
      object.choices = object.incorrect_answers);
    triviaQues.forEach((object) => 
      object.choices.push(object.correct_answer))
  },[triviaQues])

  //console.log(trivia)
  //console.log(triviaQues);

  //console.log(Array.isArray(trivia));

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
        className="m-3"
        onClick={handleClick}
      >
        {loading ? <p>Loading...</p> : <p>Start</p>}
      </Button>

      {isShown && (
        <Card body>
          <div className="card-container">
            <MultipleChoice 
              triviaQues={triviaQues} 
              index={index} 
              setIndex={setIndex}
            />
          </div>
        </Card>
      )}      
    </div>
  );
};

export default FetchApi;