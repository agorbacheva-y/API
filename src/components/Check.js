const Check = ({ checked, correct, index }) => {

    if (checked === correct[index]) {
      alert("correct!");
    } else {
      alert("Try again");
    }
  
    
  }
export default Check;