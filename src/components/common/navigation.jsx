import { useEffect } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  
  useEffect(() => {
    const location = window.location.pathname;
    let element = document.getElementById("headerNavigation");
    if(location === '/' || location === '/alambique') {
      window.onscroll = (e) => {  
        document.documentElement.scrollTop > 88
          ? element.classList.add("scroll-navigation")
          : element.classList.remove("scroll-navigation");
      }
    } else {
      element.classList.add("scroll-navigation")
    }
  }, []);
  
  return(
    <div className="navigation-wrapper">
      <nav id="headerNavigation" className="navigation">
        <Link to="/alambique" className="navigation-logo">
        </Link>
        <div className="links">
          <Link to="/invoices">Home</Link>
          <Link to="/expenses">Branding</Link>
          <Link to="/expenses">Social Media</Link>
          <Link to="/expenses">Publicidad</Link>
          <Link to="/expenses">Web/App</Link>
          <Link to="/expenses">Contacto</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;