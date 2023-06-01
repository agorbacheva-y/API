import { useState, useEffect } from "react";
import he from "he";
import QuizButton from "./QuizButton";

const Questions = ({ trivia, index, setIndex, choices, currentChoice }) => {
  // state to store questions
  const [ questions, setQuestions ] = useState([]);

  // state to store current question
  const [ currentQuestion, setCurrentQuestion ] = useState("");

  useEffect(() => {
    setQuestions(trivia.map(({question}) => he.decode(question)));
  },[]);
  //console.log(questions);

  useEffect(() => {
    setCurrentQuestion(questions[index]);
  },[questions]);
  //console.log(currentQuestion);

  return (
    <div>
      <QuizButton 
        questions={questions} 
        currentQuestion={currentQuestion} 
        index={index} 
        setIndex={setIndex} 
        choices={choices} 
        currentChoice={currentChoice}/>

      <p>{currentQuestion}</p>
    </div>
  );
};

export default Questions;

// this map() shows all questions in questions array
// {questions.map((q, index) => {
//   return (
//     <p key={index}>{q}</p>
//   );
// })}