import "./Assets/Styles/App.css";
import Header from "./component/Header";
import Dashboard from "./component/Dashboard";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <div className="App-header">
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;
