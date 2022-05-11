import branding from "../assets/branding.png";
import ContentBox from "../components/common/contentBox";
import ImageCta from "../components/common/imageCta";
import Contact from "../components/common/contact";
import ContentText from "../components/common/contentText";

const Branding = () => {
  return(
    <>
      <div className="page-content">
        <ImageCta 
          image={branding}
          title={[`Marcas con`, <br/>, <span className="pink">essencia</span>, `.`]}
          description={[`No, tu `, <b> logo </b>, `de Canva `, <br/>, `no te representa.`]}
          buttonText="Contacta con nosotros"
        />
        <ContentBox 
          text={[`Nuestro cerebro tarda 7 segundos en decidir si algo nos gusta o no. El branding no solo es imagen, lo es todo. Es aquello que diferencia a cada empresa y las hace únicas, es el qué, el cómo y el por qué. El branding es eso que en 7 segundos, sin darnos cuenta, nos hace `, <b>conectar con una empresa.</b>]}
        />
        
        <ContentText 
          titleClasses="ml-56"
          textClasses="" 
          title="Investigación"
          text={[`Todo empieza con un briefing. Nos reunimos contigo y recogemos todos los datos que nos ayudarán en las fases posteriores. Además estudiamos a tu competencia y buscamos `, <b>espacios de oportunidad</b>, ` en el sector en el que opera la empresa. Sintetizamos toda la información y empezamos a calentar nuestro alambique.`]}
        />
        
        <ContentText 
          titleClasses="ml-56"
          textClasses="" 
          title="Diseño"
          text={[`Agregamos los ingredientes y empezamos a destilar. Elaboramos diferentes bocetos e ideas, hasta que encontramos la `, <b>identidad</b>, ` que más empatiza con los usuarios y distingue a la marca. Una vez aprobado por ti, creamos tu propio manual de marca, para que tu imagen corporativa sea consistente y única.`,

          <p>Actualizamos marcas y las creamos. En esta fase del trabajo trabajamos con los colores, logotipo, fuente, naming, tagline o eslogan, tono de comunicación, además de todos los elementos corporativos que cada empresa precise, desde tarjetas de visita hasta aplicaciones textiles.</p>]}
        />

      </div>
    
      <Contact 
        title={[`Mi marca no`,<br/>, <i style={{fontWeight: 400}}>mola.</i>]}
        text={[`Si sientes que tu competencia es más `, <br/>,
        `atractiva, necesitas un `, <b>rebranding.</b>, <br/>,
        `Y si estás lanzando una nueva marca,`, <br/>,
        `sólo tienes una oportunidad de causar`, <br/>,
        `una buena primera impresión.`]}
        impactText="¡Escríbenos!"
      />
    </>
  );
}

export default Branding;