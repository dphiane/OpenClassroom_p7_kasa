import {Route,Routes } from "react-router-dom";
import Header from "./Header";
import Banner from "./banner"
import Section from "./section";
import "../styles/app.scss"
import Footer from "./footer";
import NotFound from "./NotFound"
import Propos from "./Propos"
import Logement from "./logement"


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/"element={<><Banner/><Section/></>}/>
      <Route path="/propos" element={<Propos/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
      <Route path="/:id" element={<Logement/>}></Route>
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
