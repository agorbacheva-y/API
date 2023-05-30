const Shuffle = ({choices}) => {

    // function for random order of multiple choice
  const shuffle = () => {
    for (let i = choices.length -1; i > 0; i-- ) {
      const j = Math.floor(Math.random() * (i + 1));
      [choices[j], choices[i]] = [choices[i], choices[j]];
    }
    return choices;
  };

  let multipleChoice = choices;
  shuffle(multipleChoice);
  console.log(multipleChoice);

  return (
    multipleChoice.map((i) => <li key={i}>{multipleChoice[i]}</li>)
  );
};

export default Shuffle;