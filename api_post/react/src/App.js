import logo from './logo.png';
import './App.css';
import { Link } from "react-router-dom";
import Data from './Data';


function App() {
  return (
    <button onClick={Data}>Click to Show API data</button>
  );
}

export default App;
