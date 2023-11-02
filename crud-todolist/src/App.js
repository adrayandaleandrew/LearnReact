
import './App.css';
import {useState} from 'react';
import {Task} from "./Task"

// Adding Task Part / section
// function App() {
  
//   // "set####" is a function
//   // inside the useState() parenthesis this will determine what datatype will the function be
//   const [todoList, setTodoList] = useState([]);
//   const [newTask, setNewTask] = useState("");

//   // Handles the input field and gets it value when typing
//   const handleChange = (event) => {
//     setNewTask(event.target.value);
//   };

//   // "..." means make an array with the list and the value after comma
//   const addTask = () => {
//     // you may use this below for better understanding:
//     // const newTodoList = [...todoList, newTask];

//     // This is the shortcut of the above syntax
//     setTodoList([...todoList, newTask]);
//   };

//   return (
//     <div className="App">
      
//       <div className="addTask">
//         <input onChange={handleChange} />
//         <button onClick={addTask}> Add Task</button>
//       </div>
      

//       <div className="list">
//         {todoList.map((task) => {
//           return <h1>{task}</h1>
//         })}
//       </div>
      
//     </div>
//   );
// }
// END Adding Task Part / section


// Delete Task Part / section
function App() {
  
  // "set####" is a function
  // inside the useState() parenthesis this will determine what datatype will the function be
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Handles the input field and gets it value when typing
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  // "..." means make an array with the list and the value after comma
  // Add task function
  const addTask = () => {
    // you may use this below for better understanding:
    // const newTodoList = [...todoList, newTask];

    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask
    };

    // This is the shortcut of the above syntax
    setTodoList([...todoList, task]);
  };

  // Delete task function
  const deleteTask = (id) => {

    // method 1
    // const newTodoList = todoList.filter((task) => {
    //   // if statement
    //   // if(task === taskName){
    //   //   return false;
    //   // }else{
    //   //   return true;
    //   // }

    //   return task !== taskName;
    // });
    // setTodoList(newTodoList);


    // Method 2
    setTodoList(todoList.filter((task) => task.id !== id));

  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };
  

  return (
    <div className="App">
      
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}> Add Task</button>
      </div>
      
      

      <div className="list">
        {todoList.map((task) => {
          // "() => func(something)" when having a parenthesis on a function 
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
      
    </div>
  );
}
// END Delete Task Part / section

export default App;
