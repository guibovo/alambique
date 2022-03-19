import { useState } from "react";

const Contact = props => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [message, setMessage] = useState(null);
  
  return(
    <div className="contact">
      <div className="contact-content">
        <div className="title">{props.title}</div>
        <div className="description">{props.text}</div>
        <div className="impact-text">{props.impactText}</div>
      </div>
      
      <form className="contact-form">
          <input
            placeholder="Nombre"
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          
          <input
            placeholder="Email"
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <input
            placeholder="Teléfono (opcional)"
            type="text" 
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          
          <textarea
            placeholder="Mensaje"
            type="text" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          
          <label className="checkbox">
            <input 
              type="checkbox"
              label="Some labe"
            />
            Acepto la <div>&nbsp;</div> <a href="#"> política de privacidad.</a>
          </label>
      </form>
      
    </div>
  );
}

export default Contact;