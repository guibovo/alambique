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


const App = () => {
  return (
    <>
      <BrowserRouter>

      <script src="https://cookie-cdn.cookiepro.com/scripttemplates/otSDKStub.js" data-document-language="true" type="text/javascript" charset="UTF-8" data-domain-script="741609fa-f47a-4c78-ab2b-1af110c0f094" ></script>
      <script type="text/javascript">
      function OptanonWrapper() { }
      </script>

        <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/social-media" element={<SocialMedia />} />
            <Route path="/branding" element={<Branding />} />
            <Route path="/web-app" element={<WebApp />} />
            <Route path="/publicidad" element={<Publicidad />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
  };

export default App;