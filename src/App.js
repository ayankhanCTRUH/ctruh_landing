import "./App.css";
import Header from "./components/Header/Header";
import RightPart from "./components/RightPart/RightPart";
import LeftPart from "./components/LeftPart/LeftPart";

function App() {
  return (
    <>
      <Header />
      <div className="mainContainer">
        <div className="leftPartContainer">
          <LeftPart />
        </div>
        <div className="rightPartContainer">
          <RightPart />
        </div>
      </div>
    </>
  );
}

export default App;
