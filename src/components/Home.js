import { Link } from "react-router-dom";
import EasyTrivia from "./EasyTrivia"
import MedTrivia from "./MedTrivia";

const Home = () => {
  return (
    <div className="container">
      <h1 className="title">Trivia Quiz</h1>
      <Link to="/easytrivia">Easy</Link>
      <Link to="/medtrivia">Medium</Link>
    </div>
  );
};

export default Home;