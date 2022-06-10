
import {ReactComponent as Instagram} from "../../assets/instagram.svg"
import {ReactComponent as Email} from "../../assets/email.svg"
import {ReactComponent as WhatsApp} from "../../assets/whatsapp.svg"


const SocialIcons = props => {
  return (
    <div className="social-icons-wrapper">
      <a href="https://www.instagram.com/alambique.marketing/">
        <Instagram />
      </a>
      <a href="tel:+34600590475">
        <WhatsApp />
      </a>
      <a href="mailto:mailto:Info@alambique.marketing">
        <Email />
      </a>
    </div>
  )
}

export default SocialIcons;