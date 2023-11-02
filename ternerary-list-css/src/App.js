
import './App.css'; //This is similar to linkrel but use "import" and add its path. To modify css you may use "App.css"
import {User} from './User';



// // USING TERNARY OPERATORS
// const age = 15;
    
//     // TRADITIONAL WAY
//     // if(age >= 18){
//     //   console.log("ITS OVER AGE");
//     // }else{
//     //   console.log("IS UNDER AGE");
//     // }
    
//     // TERNARY 
//     age >= 18 ? console.log("ITS OVER AGE"): console.log("ITS UNDER AGE");

// // END 

// TERNARY SAMPLE 1
// function App() {
//   const age = 19;

//   return (
//     <div className="App">
//       {age>=18 ? <h1>OVER AGE</h1>: <h1>UNDERAGE</h1>}
//     </div>
//   );
// }
// END TERNARY SAMPLE 1

// SAMPLE 2
// function App() {

//   const isGreen = false;

//   // TO DO INLINESTYLE ITS SIMILAR TO HTML BUT ITS LIKE CALLING AN OBJECT / use ":"
//   return(
//     <div className="App">
//       <h1 style={{color: isGreen ? "green" : "red"}}>THIS HAS COLOR</h1> 
      
//       {isGreen && <button>this is a button</button>}
//     </div>
//   );
// }
// END of SAMPLE 2


// SAMPLE 3 / LIST
// function App(){

//   const names = ["Andrew", "Dale", "John", "Martin"]; //This is an Array with var names

//   // name inside the cback is calling the string inside the names array
//   return (
//     <div className="App">{names.map((name, key) => {return <h1> {name} </h1>;})}</div>
//   );
// }
// END SAMPLE 3 / LIST


// SAMPLE 4 / LIST OF OBJECTS / The Component is imported see top 
// function App(){

//   //List of objects or array of obj
//   const users = [
//     {name: "Andrew", age: 25},
//     {name: "Martin", age: 20},
//     {name: "John", age: 30}
//   ]; 

//   // "user" inside the cback is calling the data inside the each arrays
//   return (
//     <div className="App">
//       {users.map((user, key) => {
//         return (
//         <User name={user.name} age={user.age} />
//         );
//       })}
//     </div>
//   );
// }
// END SAMPLE 4 / LIST OF OBJECTS


// EXERCISE Activity
// Loop each planets, display only names if its a GasPlanet
function App(){

  //List of objects or array of obj
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ]; 

  return (
    <div className="App">
      {planets.map(
        (planets, key) => planets.isGasPlanet && <h1>{planets.name}</h1>
      )}
    </div>
  );
}
export default App;

