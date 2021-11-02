import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello from CI/CD app</h1>
      {`VALUE IS: ${process.env.REACT_APP_DISPLAY_VALUE}`}
      <p>change</p>
    </div>
  );
}

export default App;
