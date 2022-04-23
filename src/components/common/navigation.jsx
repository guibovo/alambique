import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  useEffect(() => {
    const pathName= location.pathname;
    const ishomeScreen = (pathName === '/' || pathName === '/alambique'  || pathName === '/alambique/');

    let element = document.getElementById("headerNavigation");
    let logoElement = document.getElementById("headerLogo");
    let burgerMenu = document.getElementById("burger-menu");
    
    if (ishomeScreen) {
      element.classList.add("white");
      logoElement.classList.remove("black-logo");
      burgerMenu.classList.remove("black-burger");
    } else {
      element.classList.remove("white");
      logoElement.classList.add("black-logo");
      burgerMenu.classList.add("black-burger");
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
        <div id="burger-menu" className={isOpen ? "open" : ""} onClick={() => handleToggleMenu()}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`links ${isOpen ? "open" : ""}`}>
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