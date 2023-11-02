
import './App.css';
import {useState} from 'react'; //import the useState Hook from react to use it 


// Using useState
// function App() {
//   // set State / "age" is a varble / "setAge" is func to change its val
//   const [age, setAge] = useState (0);

//   const increaseAge = () => {
//     setAge(age + 1);
//   };

//   return (
//     <div className="App">
//      {age} <button onClick={increaseAge}> Increase Age </button>
//     </div>
//   );
// }
// END Using useState

// useState using input element/ get the innerhtml and show it on another div
// function App (){

//   const [inputValue, setInputValue] = useState("");

//   // event is like eventlisnter
//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   }

//   return(
//     <div className="App">
//       <input type="text" onChange={handleInputChange}/>
//       <br></br>
//       {inputValue}
//     </div>
//   );
// }
// END useState using input element


// show and hide text using states with inline func onclick
// function App (){

//   const [showText, setShowText] = useState(true);

//   // function to implement show and hide if true or false
  

//   return(
//     <div className="App">
//       <button onClick={() => {setShowText(!showText)}}>Show/Hide</button>
//       {showText && <h1>Hi my name is DALE</h1>}
//     </div>
//   );
// }
// END

// Change color on click
// function App (){
//   // useState use "" cause same as css declared as string
//   const [textColor, setTextColor] = useState("black");

//   // function to implement show and hide if true or false
  

//   return(
//     <div className="App">
//       <button onClick={() => {setTextColor(textColor === "black" ? "red" : "black" );}}>Show/Hide</button>
//       {<h1 style={{color: textColor}}>Hi my name is DALE</h1>}
//     </div>
//   );
// }
//END Change color on click


// Exercise Activity
function App (){

  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount (count + 1);
  };
  const decreaseCount = () => {
    setCount (count - 1);
  };

  const setToZero = () => {
    setCount (0);
  };
  
  return(
    <div className='App'>
      <button onClick={addCount}>Increase</button>
      <br></br>
      <button onClick={decreaseCount}>Decrease</button>
      <br></br>
      <button onClick={setToZero}>Set to Zero</button>
      <br></br>

      {count}
    </div>
  );
}

//END Exercise Activity

export default App;
