import './App.css';
import TextInput from "./TextInput.js";

function App() {
  return (
    <div className="App">
      <h1>The Dog API</h1>
      <p>You can try entering the following endpoints: </p>
      <p>breeds</p>
      <p>images/search</p>
      <TextInput></TextInput>
    </div>
  );
}

export default App;