import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Banner from "./banner";
import Footer from "./footer";
import NotFound from "./NotFound";
import Propos from "./Propos";
import Logement from "./logement";
import Gallery from "./gallery";
import "../styles/layout/app.scss";
import "../styles/abstracts/font.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={
              <>
                <Banner />
                <Gallery />
              </>
            }
          />
          <Route path="propos" element={<Propos />} />
          <Route path="logement/:id" element={<Logement/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
