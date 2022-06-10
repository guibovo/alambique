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
import NotFound from "./pages/fourZeroFour";
import Contact from "./pages/contact";
import './fonts/Poppins.ttf';
import './main.css';
import PrivacyPoliccy from "./pages/privacyPolicy";
import LegalWarning from "./pages/legalWarning";
import CookiesText from "./pages/cookiesText";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/social-media" element={<SocialMedia />} />
            <Route path="/branding" element={<Branding />} />
            <Route path="/web-app" element={<WebApp />} />
            <Route path="/publicidad" element={<Publicidad />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/politica-de-privacidad" element={<PrivacyPoliccy/>}/>
            <Route path="/aviso-legal" element={<LegalWarning/>}/>
            <Route path="/cookies" element={<CookiesText/>}/>
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
  };

export default App;