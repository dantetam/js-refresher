import logo from './logo.svg';
import './App.css';

import MyAddingCounter from './MyAddingCounter.js';
import MyHttpRequester from './MyHttpRequester.js';
import MyPromiseComp from './MyPromiseComp.js';
import MiniCactpotSolver from './MiniCactpotSolver.js';
import MyListCounterThing from './MyListCounterThing.js';
import MyColorChangingElement from './MyColorChangingElement.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is Dante's page.<br/>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyAddingCounter title="This is the adding counter title." />
        <MyHttpRequester />
        <hr />
        <MyPromiseComp />
        <MiniCactpotSolver rows={3} cols={3} />
        <MyListCounterThing />
        <MyColorChangingElement rows={9} />
      </header>
    </div>
  );
}

export default App;
