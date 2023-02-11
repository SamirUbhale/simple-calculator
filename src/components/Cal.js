import React, {useState} from "react";

const Cal = () => {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState();
  
  const add = () => {
    setResult(parseInt(num1) + parseInt(num2));
  };

  const sub = () => {
    setResult(parseInt(num1) - parseInt(num2));
  };

  const mul = () => {
    setResult(parseInt(num1) * parseInt(num2));
  };

  const div = () => {
    setResult(parseInt(num1) / parseInt(num2));
  };
  return (
    <div className="Appl">
    <h1>React Calculator</h1>
    <div>
    <input type="text" name="Num 1" value={num1} placeholder="Num 1" onChange={(event) => {setNum1(event.target.value);}}/> 
    </div>
    <br></br>
    <div>
    <input type="text" name="Num 2" value={num2} placeholder="Num 2" onChange={(event) => {setNum2(event.target.value);}}/>
    </div>
    <br></br>
    <button value="btn" onClick={add}>
      +
    </button>
    <button value="btn" onClick={sub}>
      -
    </button>
    <button value="btn" onClick={mul}>
      *
    </button>
    <button value="btn" onClick={div}>
      /
    </button>
    <br></br><br></br>
    <div>
      <input type="text" name="result" value={result} placeholder="Result ="/> 
    </div>
    </div>
  );
}

export default Cal;
