import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  useEffect(() => {
    const pathName= location.pathname;
    const startsTransparent = (pathName === '/' || pathName === '/alambique'  || pathName === '/alambique/');

    let element = document.getElementById("headerNavigation");
    
    startsTransparent 
      ? element.classList.remove("scroll-navigation") : element.classList.add("scroll-navigation");
    
    window.onscroll = (e) => {
      if (startsTransparent) {
        document.documentElement.scrollTop > 88
          ? element.classList.add("scroll-navigation")
          : element.classList.remove("scroll-navigation");
      }
    }
  }, [location]);
  
  return(
    <div className="navigation-wrapper">
      <nav id="headerNavigation" className="navigation">
        <Link to="/alambique" className="logo">
        </Link>
        <div className="links">
          <Link to="/alambique">Home</Link>
          <Link to="/branding">Branding</Link>
          <Link to="/social-media">Social Media</Link>
          <Link to="/publicidad">Publicidad</Link>
          <Link to="/web-app">Web/App</Link>
          <Link to="/contacto">Contacto</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;