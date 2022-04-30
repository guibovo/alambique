import SocialIcons from "./socialIcons";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-content">
          <div className="logo"></div>
          
          <SocialIcons />
        </div>
        
        <div className="footer-content">
          <div className="links">
              <a className="white" href="#"> Legal </a>
              <a className="white" href="#">Políticas de Privacidad</a>
              <a className="white" href="#">Configuración de cookies</a>
          </div>
          
          <div className="rights">@{year} alambique</div>
        </div>
      </div>
    </div>
  )
}
export default Footer;