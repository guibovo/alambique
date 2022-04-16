import Contact from "../components/common/contact";

const ContactPage = props => {
  return (
    <div className="mt-180">
      <Contact 
        title={[`No`,<br/>, `mordemos.`]}
        text={['Los servicios anteriormente descritos', <br/>,
        'son un resumen de nuestro trabajo, pero', <br/>,
        'podemos ayudarte en cualquier asunto', <br/>,
        'relacionado con el marketing y el diseño.', <br/>,
        'No tenemos planes, cada empresa es', <br/>,
        'única y ajustamos presupuesto en base', <br/>,
        'a las necesidades de cada una.'
        ]}
        impactText='Conozcámonos'
      />
    </div>
  )
}

export default ContactPage; 