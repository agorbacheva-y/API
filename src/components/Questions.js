import { useState, useEffect } from "react";
import he from "he";
import QuizButton from "./QuizButton";

const Questions = ({ trivia, index, setIndex, currentChoice }) => {
  // state to store questions
  const [ questions, setQuestions ] = useState([]);

  useEffect(() => {
    setQuestions(trivia.map(({question}) => he.decode(question)));
  },[]);
  //console.log(questions);

  let currentQuestion = questions[index];
  //console.log(currentQuestion);

  return (
    <div>
      <QuizButton questions={questions} currentQuestion={currentQuestion} index={index} setIndex={setIndex} currentChoice={currentChoice}/>
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