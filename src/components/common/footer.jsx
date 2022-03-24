const Footer = () => {
  const year = new Date().getFullYear();;
  
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-content">
          <div className="logo"></div>
          
          <div>HERE GOES SOCIAL MEDIA ICONS AND LINKS</div>
        </div>
        
        <div className="footer-content">
          <div className="links">
              <a href="#"> Legal </a>
              <a href="#">Políticas de Privacidad</a>
              <a href="#">Configuración de cookies</a>
          </div>
          
          <div className="rights">@{year} alambique</div>
        </div>
      </div>
    </div>
  )
}
export default Footer;