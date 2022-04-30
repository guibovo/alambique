
import {ReactComponent as Instagram} from "../../assets/instagram.svg"
import {ReactComponent as Email} from "../../assets/email.svg"
import {ReactComponent as WhatsApp} from "../../assets/whatsapp.svg"


const SocialIcons = props => {
  return (
    <div className="social-icons-wrapper">
      <a href="#">
        <Instagram />
      </a>
      <a href="#">
        <WhatsApp />
      </a>
      <a href="#">
        <Email />
      </a>
    </div>
  )
}

export default SocialIcons;