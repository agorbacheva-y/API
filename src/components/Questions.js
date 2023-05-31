import { useState } from "react";
import he from "he";
import QuizButton from "./QuizButton";

const Questions = ({ trivia }) => {
  // state for index of question shown
  const [ index, setIndex ] = useState(0);

  const questions = trivia.map(({question}) => he.decode(question));
  //console.log(questions);

  let currentQuestion = questions[index];
  //console.log(currentQuestion);

  return (
    <div>
      <QuizButton questions={questions} index={index} setIndex={setIndex} />
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