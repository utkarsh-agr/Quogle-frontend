import logo from "./quogle_loader_1400.gif";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import Base2 from "./components/Base2";
import Base1 from "./components/Base1";
function App() {
  return (
    <Base1>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </Base1>
  );
}

export default App;
