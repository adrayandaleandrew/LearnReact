import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

// Fetch Function and Axios Library
// function App() {
//   const [catFact, setCatFact] = useState("");

//   const fetchCatFact = () => {
//     Axios.get("https://catfact.ninja/fact").then((res) => {
//       setCatFact(res.data.fact);
//     });
//   }

//   useEffect(() => {
//     fetchCatFact();
//   }, []);

//   return (
//     <div className="App">
//       <button onClick={fetchCatFact}> Generate Cat Fact </button>
//       <p>{catFact}</p>
//     </div>
//   );
// }
//END -- Fetch Function and Axios Library

// Dynamically changing the data we request / Example 2
// function App() {
//   const [name, setName] = useState("");

//   const [predictedAge, setPredictedAge] = useState(null);

//   const fetchData = () => {
//     Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
//       setPredictedAge(res.data);
//     });
//   };

//   return (
//     <div className="App">
//       <input
//         placeholder="Enter Name"
//         onChange={(event) => {
//           setName(event.target.value);
//         }}
//       />
//       <button onClick={fetchData}> Predict Age </button>
//       <h1>Name: {predictedAge?.name} </h1>
//       <h1>Predicted age: {predictedAge?.age} </h1>
//       <h1>Count: {predictedAge?.count} </h1>
//     </div>
//   );
// }
//END --  Dynamically changing the data we request / Example 2

// EXERCISE
function App() {
  

  return (
    <div className="App">
      <h1>Generate An Excuse</h1>
      <button> Party </button>
      <button> Family </button>
      <button> Office </button>
     
    </div>
  );
}
//END -- EXERCISE

export default App;
