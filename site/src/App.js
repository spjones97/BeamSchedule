import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => (
  <body>
    <h1>BeAM Scheduler</h1>
    <ul className="menubar">
      <li className="menuitem">
        HOME
      </li>
      <li className="menuitem">
        SCHEDULES
      </li>
    </ul>
    <footer>
      <h1>This will be the footer</h1>
    </footer>
  </body>
)

export default App;
