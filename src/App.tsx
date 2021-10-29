import "./App.css";
import dotenv from 'dotenv';
dotenv.config();

function App() {
  const value = process.env.API_KEY;
  return <div className="App">
    <h1>Hello from CI/CD app</h1>
    {`VALUE IS: ${value}`}</div>;
}

export default App;
