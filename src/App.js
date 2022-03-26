import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navigation from "./components/common/navigation";
import Footer from "./components/common/footer";
import Home from "./pages/home";
import SocialMedia from "./pages/socialMedia";
import Branding from "./pages/branding";
import WebApp from "./pages/webApp";
import Publicidad from "./pages/publicidad";
import NotFound from "./pages/notFound";
import './fonts/Poppins.ttf';
import './main.css';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/alambique" element={<Home />} />
            <Route path="/social-media" element={<SocialMedia />} />
            <Route path="/branding" element={<Branding />} />
            <Route path="/web-app" element={<WebApp />} />
            <Route path="/publicidad" element={<Publicidad />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
  };

export default App;