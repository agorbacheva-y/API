import he from "he";

const Questions = ({ trivia, index }) => {

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