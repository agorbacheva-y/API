import { useState } from "react";
import he from "he";

const Questions = ({ trivia }) => {
  // state for index of question shown
  const [ index, setIndex ] = useState(0);

  const questions = trivia.map(({question}) => he.decode(question));
  //console.log(questions);

  let currentQuestion = questions[index];

  return (
    <div>
      {currentQuestion}
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