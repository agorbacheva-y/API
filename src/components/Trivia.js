import { useState, useEffect} from "react";
import MultipleChoice from "./MultipleChoice";
import Questions from "./Questions";
import QuizButton from "./QuizButton";

const Trivia = () => {
  const triviaUrl = localStorage.getItem("url");
  const triviaLevel = localStorage.getItem("level");

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

  // state for correct answer
  const [ correct, setCorrect ] = useState("");

  // state for showing play btn
  const [ showPlay, setShowPlay ] = useState(true);

  // state for changing color of correct answer
  const [ colorOfCorrect, setColorOfCorrect ] = useState(false);

  useEffect(() => {
    const fetchTrivia = async () => {
      setLoading(true);
      try {
        const response = await fetch(triviaUrl);
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
    
    setCorrect(triviaQues[index]?.correct_answer);
  },[triviaQues])

  //console.log(trivia)
  //console.log(triviaQues);
  //console.log(Array.isArray(trivia));

  // function to show card with question
  const handleClick = (e) => {
    e.preventDefault();
    setIsShown(true);
    setShowPlay(false);
  };

  return (
    <div className="container trivia">
      <div className="quiz-container">
        <h1 className="title">Trivia Quiz</h1>
        <h2>Level: {triviaLevel}</h2>
      </div>
     
      <div 
        className="play-container"
        style={showPlay ? {display: "flex"} : {display : "none"}}
      >
        <button
          className="play-btn"
          onClick={handleClick}
        >
          {loading ? <p>Loading...</p> : <p>Play</p>}
        </button>
      </div>
   
      {isShown && (
        <QuizButton 
          triviaQues={triviaQues} 
          index={index} 
          setIndex={setIndex} 
          setChecked={setChecked}
          checked={checked}
          correct={correct}
          setColorOfCorrect={setColorOfCorrect}
        />
      )}
      
      {isShown && (
        <Questions 
          triviaQues={triviaQues} 
          index={index} 
          setIndex={setIndex}
        />
      )}

      {isShown && (
        <MultipleChoice 
          triviaQues={triviaQues} 
          index={index} 
          setIndex={setIndex}
          checked={checked}
          setChecked={setChecked}
          correct={correct}
          colorOfCorrect={colorOfCorrect}
        />
      )}      
    </div>
  );
};

export default Trivia;

// correct questions loading
// correct answer not changing with index in multiplechoice.js