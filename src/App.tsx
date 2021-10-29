import "./App.css";

function App() {
  const value = process.env.REACT_APP_API_KEY;
  return (
    <div className="App">
      <h1>Hello from CI/CD app</h1>
      {`VALUE IS: ${value}`}
      <p>Added new Line</p>
    </div>
  );
}

export default App;
