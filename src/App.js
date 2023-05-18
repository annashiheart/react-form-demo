import logo from './arclogo.png';
import './App.css';

import { Bounce } from "react-awesome-reveal";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form onsubmit="return validate()">
          <input class="animate__bounceInDown" type="image" id="logo" src={logo} alt="logo" name="btnlogo"></input>
          <br></br>
          <Bounce>
            <label for="name">Name</label>
          </Bounce>
          <input type="text" id="name" name="name" placeholder="Firstname Lastname" required></input>
          <br></br><br></br>
          <Bounce>
            <label for="edu">Highest level of education</label>
          </Bounce>
          <select id="edu" name="edu">
            <option value="hs">High school diploma</option>
            <option value="undergrad">Undergraduate studies</option>
            <option value="grad">Graduate studies</option>
            <option value="other">Other</option>
          </select>
          <br></br><br></br>
          <Bounce>
            <button>Submit</button>
          </Bounce>
          <br></br>
        </form>
      </header>
    </div>
  );
}

export default App;
