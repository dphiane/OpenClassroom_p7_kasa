import {Route,Routes } from "react-router-dom";
import Header from "./Header";
import Banner from "./banner";
import Section from "./section";
import "../styles/app.scss"
import Footer from "./footer";
import NotFound from "./NotFound"

function App() {
  return (
    <div className="App">
      <Header />
      <Banner/>
      <Routes>
      <Route path="/accueil"element={<Section/>}/>
      <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
