import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello from CI/CD app</h1>
      {`VALUE IS: ${process.env}`}
      <p>Added paragraph line </p>
    </div>
  );
}

export default App;
