import Button from "react-bootstrap/Button";

const Points = ({ points, setShow }) => {
  return (
    <div className="overlay">
      <div className="content">
        <p>You got {points} answers correct!</p> 
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