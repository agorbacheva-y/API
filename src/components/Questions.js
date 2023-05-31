import he from "he";
import QuizButton from "./QuizButton";

const Questions = ({ trivia, index, setIndex }) => {

  const questions = trivia.map(({question}) => he.decode(question));
  //console.log(questions);

  let currentQuestion = questions[index];
  //console.log(currentQuestion);

  return (
    <div>
      <QuizButton questions={questions} currentQuestion={currentQuestion} index={index} setIndex={setIndex}/>
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