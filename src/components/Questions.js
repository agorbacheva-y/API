import { useState, useEffect } from "react";
import he from "he";
import QuizButton from "./QuizButton";

const Questions = ({ triviaQues, index, setIndex, setChecked, checked }) => {
  return (
    <div>
      <QuizButton 
        triviaQues={triviaQues} 
        index={index} 
        setIndex={setIndex} 
        setChecked={setChecked}
        checked={checked}
        />

      <p>{triviaQues[index].question}</p>
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