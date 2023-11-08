import './App.css';
import {useState} from 'react';

function App() {

  const TopComponent = () => {
    const [state,setState] = useState();
    return(
      <div>
        <MidComponent state={state}/>
      </div>
    );
  };
  
  const MidComponent = (state) => {
    return(
      <div>
        <BottomComponent state={state}/>
      </div>
    );
  };

  const BottomComponent = (state) => {
    return(
      <div>
        {state}
      </div>
    );
  };

  return (
    <div className="App">
      hello world
    </div>
  );
}

export default App;
