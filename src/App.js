import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import data from "./data.json";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner2/Banner2";

function App() {
  return (
    <>
      <Header />
      <Banner2 />
      {/* <Banner /> */}
      <Body data={data.slides} />
      <Footer />
    </>
  );
}

export default App;
