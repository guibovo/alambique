import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navigation from "./components/common/navigation";
import Footer from "./components/common/footer";
import Home from "./pages/home";
import SocialMedia from "./pages/socialMedia";
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
  };

export default App;