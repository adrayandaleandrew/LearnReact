import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {Home} from "./pages/Home";
import {Contact} from "./pages/Contact";
import {Menu} from "./pages/Menu";
import {Navbar} from "./Navbar"; // to call navbar component
 // Router = define where we have diff routes 

// function App() {
//   return (
//     <div className="App">
//       <Router>
        
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/menu" element={<Menu />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="*" element={<h1> PAGE NOT FOUND </h1>} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }


// Creating Links
// function App() {
//   return (
//     <div className="App"> 
//       <Router> {/* same as a href */}

//         <div>    
//           NAVBAR 
//           <Link to="/"> Home</Link>
//           <Link to="/menu"> Menu</Link>
//           <Link to="/contact"> Contact</Link> 
//         </div>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/menu" element={<Menu />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="*" element={<h1> PAGE NOT FOUND </h1>} />
//         </Routes>

//       </Router>
//     </div>
//   );
// }
//END  Creating Links

// NAVBAR
function App() {
  return (
    <div className="App"> 
      <Router> 

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1> PAGE NOT FOUND </h1>} />
        </Routes>
        
      </Router>
    </div>
  );
}
// END NAVBAR

export default App;
