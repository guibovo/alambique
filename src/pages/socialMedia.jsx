import socialMedia from "../assets/socialMedia.svg";
import ContentBox from "../components/common/contentBox";
import ImageCta from "../components/common/imageCta";
import Contact from "../components/common/contact";
import ContentText from "../components/common/contentText";

const SocialMedia = () => {
  return(
    <>
      <div className="page-content">
        <ImageCta 
          image={socialMedia}
          title={[`Déjate de`, <br/>, `algoritmos.`]}
          description={[`Los truquitos funcionan,`, <br/>, `si tu contenido `, <b>engancha.</b>]}
          buttonText="Contacta con nosotros"
        />
        <ContentBox 
          text={[`Tu escaparate. Todo lo que tu público debería saber de tu marca. Tener `, <b>buena reputación</b>, ` en redes sociales no sólo fideliza a tus clientes, si no que consolida tu marca frente a la competencia. Te convierte en un referente de tu sector.`]}
        />
        
        <ContentText 
          titleClasses="ml-56"
          textClasses="" 
          title="Estrategia"
          text={[`Elaboramos un Plan de Acción en base a los objetivos de tu marca. Analizamos tu audiencia potencial y tu competencia para comprender `, <b> qué quieren ver y saber tus clientes de tí</b>, `, y lo difundimos entre tu audiencia mediante la gestión diaria de tus redes.`]}
        />
        
        <ContentText 
          titleClasses="ml-56"
          textClasses="" 
          title="Contenidos"
          text={[`El contenido lo es todo. Ni la mejor estrategia funciona si tus publicaciones no generan `, <b>engagement</b>, `. Fotografía, vídeo, diseño gráfico... La estrategia decide qué contenido funciona mejor para  tus redes y nuestros profesionales se encargan de generarlo.
          `]}
        />
        
        <ContentText 
          titleClasses="ml-56"
          textClasses="" 
          title="Análisis"
          text={[`Realizamos un seguimiento de las acciones llevadas a cabo para sacar conclusiones y actuar en consecuencia. El Plan de Acción debe evolucionar con la marca y las `, <b>nuevas tendencias</b>, ` para evitar estancamientos y estar siempre actualizados.`]}
        />
        
        
      </div>
    
      <Contact 
        title={[`Quiero pertarlo`,<br/>, `en las redes.`]}
        text={[`Es un largo camino por recorrer, pero`, <br/>,
        `al final no tendrás clientes, tendrás`, <br/>,
        `una `, <b>comunidad.</b>]}
        impactText="¡Empecemos!"
      />
    </>
  );
}

export default SocialMedia;