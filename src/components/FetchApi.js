import { useState, useEffect} from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const FetchApi = () => {
  // state to store api data
  const [ trivia, setTrivia ] = useState([]);

  // state for loading data
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    const fetchTrivia = async () => {
      setLoading(true);
      const response = await axios("https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple");
      setLoading(false);

      setTrivia(result.data);
    };
    
    fetchTrivia();
    console.log(trivia);

    if (!data) {
      alert("No data");
    }
  },[]);

  console.log("data");
  

  return (
    <div>
      <Card body>

      </Card>
    </div>
  );
};

export default FetchApi;