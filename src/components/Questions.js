import { useState, useEffect } from "react";
import he from "he";
import QuizButton from "./QuizButton";

const Questions = ({ triviaQues, index, setIndex, choices, currentChoice, setCurrentChoice, setChecked, checked, correct }) => {
  // state to store current question
  const [ currentQuestion, setCurrentQuestion ] = useState("");

  useEffect(() => {
    setCurrentQuestion(triviaQues.map(({question}) => he.decode(question)));
  },[triviaQues]);
  console.log(currentQuestion);

  return (
    <div>
      <QuizButton 
        triviaQues={triviaQues} 
        currentQuestion={currentQuestion} 
        setCurrentQuestion={setCurrentQuestion}
        index={index} 
        setIndex={setIndex} 
        choices={choices} 
        currentChoice={currentChoice}
        setCurrentChoice={setCurrentChoice}
        setChecked={setChecked}
        checked={checked}
        correct={correct}
        />

      <p>{currentQuestion.question}</p>
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