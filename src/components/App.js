import {Route,Routes } from "react-router-dom";
import Header from "./Header";
import Banner from "./banner";
import Section from "./section";
import "../styles/app.scss"
import Footer from "./footer";
import NotFound from "./NotFound"
import Propos from "./Propos"

function App() {
  return (
    <div className="App">
      <Header />
      <Banner/>
      <Routes>
      <Route path="/accueil"element={<Section/>}/>
      <Route path="/propos" element={<Propos/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
