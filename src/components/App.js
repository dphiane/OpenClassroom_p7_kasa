import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Banner from "./banner";
import Section from "./section";
import "../styles/app.scss"

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Section/>

    </div>
  );
}

export default App;
