import "./App.css";

// NOTES:
// This is a JavaScript Function
// const GetName = () => {
//   return "Dale";
// };

// This is a JSX / always returning UI stuff / all components start with uppercase Letter
// const GetNameComponent = () => {
//   return <h1>This is a Component</h1>;
// };

// App() is a component = Contains Sample 1 and 2;
// function App() {
//   // Variable init for Sample 1, 2
//   const name = <h1>Dale</h1>;
//   const age = <h2>25</h2>;
//   const email = <h2>dale@gmail.com</h2>;

//   // For Sample 1
//   //   return (
//   //     // For Sample 1
//   //   // <div className="App">
//   //   //   {name}
//   //   //   {age}
//   //   //   {email}
//   //   // </div>
//   //   );

//   // Sample 2
//   // const user = (
//   //   <div>
//   //     {name}
//   //     {age}
//   //     {email}
//   //   </div>
//   // );

//   // // For Sample 2
//   // return (
//   //   <div className = "App">
//   //     {user}
//   //   </div>
//   // );

// }

// For Sample 3
// function App () {
//   return (
//     <div className = "App">
//       {/* To call components its like calling an html tag */}
//       <User />

//     </div>
//   );
// }

// For Sample 3 using components
// const User = () => {
//   return (
//     <div>
//      <h1>Andrew</h1>
//      <h1>25 yrs old</h1>
//      <h1>andrew@gmail.com</h1>
//     </div>
//   );
// };

// For Sample 4 Using Argument/ Props
// function App (){
//   return (
//     <div className="App">
//       <User name="Dale" age={21} email="andrew@gmail.com" />
//       <User name="Fred" age={30} email="Fred@gmail.com"/>

//     </div>
//   );
// }

// For Sample 4 / Props
// const User = (props) => {
//     return (
//       <div>
//        <h1>{props.name}</h1>
//        <h1>{props.age}</h1>
//        <h1>{props.email}</h1>
//       </div>
//     );
//   };

// For Activity
function App() {
  return (
    <div className="App">
      <Job salary={9000} position="Senior SDE" company=" Amazon" />
      <Job salary={12000} position="Junior SDE" company=" Google" />
      <Job salary={10000} position="Project SDE" company=" NetFlix" />
    </div>
  );
}

// Component for Activity will contain the object that will be used in the Activity App()
const Job = (props) => {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  );
};

export default App;
