import he from "he";

const Questions = ({ trivia }) => {

  const questions = trivia.map(({question}) => he.decode(question));
  console.log(questions);

  return (
    <div>
      {questions.map((q, index) => {
          return (
            <p key={index}>{q}</p>
          );
        })}
    </div>
  );
};

export default Questions;