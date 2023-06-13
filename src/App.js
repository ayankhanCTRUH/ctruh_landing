import "./App.css";
import Header from "./components/Header/Header";
import RightPart from "./components/RightPart/RightPart";
import LeftPart from "./components/LeftPart/LeftPart";
import Body from "./components/Body/Body";

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
      <Body />
    </>
  );
}

export default App;
