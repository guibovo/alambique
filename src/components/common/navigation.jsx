import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  useEffect(() => {
    const pathName= location.pathname;
    const ishomeScreen = (pathName === '/' || pathName === '/alambique'  || pathName === '/alambique/');

    let element = document.getElementById("headerNavigation");
    let logoElement = document.getElementById("headerLogo")
    
    if (ishomeScreen) {
      element.classList.add("white");
      logoElement.classList.remove("black-logo");
    } else {
      element.classList.remove("white");
      logoElement.classList.add("black-logo");
    }
    
    window.onscroll = (e) => {
      if (document.documentElement.scrollTop > 88) {
        element.classList.add("scroll-navigation")
      } else {
          element.classList.remove("scroll-navigation");
          if(ishomeScreen) {
            element.classList.add("white");
          }
      }
    }
  }, [location]);
  
  const underlineCurrentPage = linkTo => {
    if (location.pathname === linkTo) {
      return 'pink-underline';
    }
    return '';
  }
  
  return(
    <div className="navigation-wrapper">
      <nav id="headerNavigation" className="navigation">
        <Link id="headerLogo" to="/alambique" className="logo">
        </Link>
        <div className="links">
          <Link className={underlineCurrentPage('/alambique')} to="/alambique">Home</Link>
          <Link className={underlineCurrentPage('/branding')} to="/branding">Branding</Link>
          <Link className={underlineCurrentPage('/social-media')} to="/social-media">Social Media</Link>
          <Link className={underlineCurrentPage('/publicidad')} to="/publicidad">Publicidad</Link>
          <Link className={underlineCurrentPage('/web-app')} to="/web-app">Web/App</Link>
          <Link className={underlineCurrentPage('/contacto')} to="/contacto">Contacto</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;