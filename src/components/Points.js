import Button from "react-bootstrap/Button";

const Points = ({ points, setShow, triviaQues }) => {
  return (
    <div className="overlay">
      <div className="content">
        <h1>Your score</h1> 
        <p>{points} out of {triviaQues.length}</p>
        <Button
          variant="primary"
          onClick={() => setShow(false)}
        >
        Close
        </Button> 
      </div>
    </div>
  );
};
export default Points;