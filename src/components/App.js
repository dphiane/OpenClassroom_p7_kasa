import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Banner from "./banner";
import Section from "./section";
import "../styles/app.scss"
import Footer from "./footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Section/>
      <Footer />

    </div>
  );
}

export default App;
