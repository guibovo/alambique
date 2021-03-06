import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SocialIcons from "./socialIcons";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const year = new Date().getFullYear();

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  useEffect(() => {
    const pathName= location.pathname;
    const ishomeScreen = (pathName === '/');

    let element = document.getElementById("headerNavigation");
    let logoElement = document.getElementById("headerLogo");
    let burgerMenu = document.getElementById("burger-menu");
    let navigationLins = document.getElementById("navigation-links");
    
    /* RESET BURGER MENU */
    burgerMenu.classList.remove("open");
    navigationLins.classList.remove("open");
    setIsOpen(false);
    /* RESET BURGER MENU */
    window.scrollTo(0, 0);
    
    if (ishomeScreen) {
      element.classList.add("white");
      logoElement.classList.remove("black-logo");
    } else {
      element.classList.remove("white");
      logoElement.classList.add("black-logo");
    }
    
    window.onscroll = (e) => {
      if (document.documentElement.scrollTop > 1) {
        element.classList.add("scroll-navigation");
      } else {
          element.classList.remove("scroll-navigation");
          burgerMenu.classList.add("black-burger");
          if(ishomeScreen) {
            element.classList.add("white");
            burgerMenu.classList.remove("black-burger");
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
  
  const isHomeScreen = path => (path === '/');

  return(
    <div className="navigation-wrapper">
      <nav id="headerNavigation" className="navigation">
        <Link id="headerLogo" to="/" className="logo">
        </Link>
        <div id="burger-menu" className={`${isOpen ? "open" : ""} ${isHomeScreen(location.pathname) ? '' : 'black-burger'}`} onClick={() => handleToggleMenu()}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div id="navigation-links" className={`links ${isOpen ? "open" : ""}`}>
          <Link className={underlineCurrentPage('/')} to="/">Home</Link>
          <Link className={underlineCurrentPage('/branding')} to="/branding">Branding</Link>
          <Link className={underlineCurrentPage('/social-media')} to="/social-media">Social Media</Link>
          <Link className={underlineCurrentPage('/publicidad')} to="/publicidad">Publicidad</Link>
          <Link className={underlineCurrentPage('/web-app')} to="/web-app">Web/App</Link>
          <Link className={underlineCurrentPage('/contacto')} to="/contacto">Contacto</Link>
          <div className="burger-footer">
            <div className="rights charcoal">@{year} alambique</div>
            <SocialIcons />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;