import publicidadImage from "../assets/publicidadImage.svg";
import ContentBox from "../components/common/contentBox";
import ImageCta from "../components/common/imageCta";
import Contact from "../components/common/contact";
import ContentText from "../components/common/contentText";

const Publicidad = () => {
  return(
    <>
      <div className="page-content">
        <ImageCta 
          image={publicidadImage}
          title={[`Necesitas`, <br/>, `publicidad.`]}
          description={[`Tranqui, CocaCola, Apple, o`, <br/>, `Amazon también.`]}
          buttonText="Contacta con nosotros"
        />
        <ContentBox 
          text={[`El objetivo de toda publicidad, además de vender, es `, <b>permanecer en el recuerdo</b>, `. Existen varias formas de conseguirlo, y todas tienen un factor en común, mantener el tiempo máximo posible al espectador. Despertar emociones, hacerse preguntas, reflexionar. La creatividad es nuestro punto fuerte y nos adaptamos al público de cada empresa para asociar un sentimiento en el espectador que la identifique.`]}
        />
        
        <ContentText 
          titleClasses="ml-56"
          textClasses="" 
          title="Exterior"
          text={[`Teniendo en cuenta tus objetivos, decidimos qué canales son los más adecuados y elaboramos un diseño acorde a ellos. Realizamos una investigación y escogemos estratégicamente los lugares de implementación que aporten el `, <b>mayor impacto</b>, ` al publico objetivo posible. La creatividad manda, tus anuncios no pasarán desapercibidos.`]}
        />
        
        <ContentText 
          titleClasses="ml-56"
          textClasses="" 
          title="Online"
          text={[`Según las estadísticas, promocionarse en redes sociales, buscadores y webs ya es la mayor inversión publicitaria de las empresas. No es de extrañar, el número de usuarios crece cada día y este tipo de acciones conllevan `, <b>muchas ventajas</b>, `. Cuéntanos cuál es tu objetivo y elaboraremos un plan para tí.`]}
        />
        
        <ContentText 
          titleClasses="ml-56"
          textClasses="" 
          title="Campañas"
          text={[`Si lo que buscas es algo más que un empujón, has llegado al lugar adecuado. Da igual si quieres dar a conocer una nueva empresa, un nuevo producto o una nueva promoción, nuestra estrategia y nuestra creatividad van a conseguirlo. Elaboramos un plan de acción transmedia adecuado para cada proyecto. Físicas o digitales, tus acciones publicitarias `, <b>darán que hablar.</b>]}
        />
        
        <ContentText
          titleClasses="ml-56"
          title="Merchandising"
          text={[`Tener buen merchandising es tan importante como tener un buen branding. Lo que ofreces con tu imagen a tus clientes dice tanto de ti como tu publicidad o tus propios productos o servicios. Ser creativo a la hora de generar merchandising es un elemento `, <b>diferencial único</b>, `. Contacta con nosotros y sorprende a tu público.`]}
        />
        
        
      </div>
    
      <Contact 
        title={[`No quiero`,<br/>, `parecer `, <i>spam.</i>]}
        text={[`Ser creativos a la hora de publicitarse`, <br/>,
        `es primordial para `, <b>conseguir resultados</b>, `.`]}
        impactText="¿Te atreves?"
      />
    </>
  );
}

export default Publicidad;