import { useState, useEffect} from "react";
import Card from "react-bootstrap/Card";
import MultipleChoice from "./MultipleChoice";
import Questions from "./Questions";
import QuizButton from "./QuizButton";

const EasyTrivia = () => {
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

  // state for selected answer
  const [ checked, setChecked ] = useState(null);

  useEffect(() => {
    const fetchTrivia = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple");
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
      object.choices.push(object.correct_answer));
  },[triviaQues])

  //console.log(trivia)
  //console.log(triviaQues);
  //console.log(Array.isArray(trivia));

  // function to show card with question
  const handleClick = (e) => {
    e.preventDefault();
    setIsShown(true);
    e.target.style.display = "none";
  };

  return (
    <div className="container">  
      <div className="start-container">
        <button
          className="start-btn"
          onClick={handleClick}
        >
          {loading ? <p>Loading...</p> : <p>Start</p>}
        </button>
      </div>
     
   
      {isShown && (
        <QuizButton 
          triviaQues={triviaQues} 
          index={index} 
          setIndex={setIndex} 
          setChecked={setChecked}
          checked={checked}
        />
      )}
      
      {isShown && (
        <div className="card-container">
          <Questions 
            triviaQues={triviaQues} 
            index={index} 
            setIndex={setIndex}
          />
        </div>
      )}

      {isShown && (
        <Card.Body>
          <div className="multi-choice-container">
            <MultipleChoice 
              triviaQues={triviaQues} 
              index={index} 
              setIndex={setIndex}
              checked={checked}
              setChecked={setChecked}
            />
          </div>
        </Card.Body>
      )}      
    </div>
  );
};

export default EasyTrivia;