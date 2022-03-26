import webApp from "../assets/web-app.svg";
import ContentBox from "../components/common/contentBox";
import ImageCta from "../components/common/imageCta";
import Contact from "../components/common/contact";
import ContentText from "../components/common/contentText";

const WebApp = () => {
  return(
    <>
      <div className="page-content">
        <ImageCta 
          image={webApp}
          title={[`Menos clicks,`, <br/>, `más likes.`]}
          description={[`La delgada línea entre`, `navegar y surfear.`]}
          buttonText="Contacta con nosotros"
        />
        <ContentBox 
          text={[`Numerosos estudios indican que el diseño de una web o app influye más en la decisión de compra que la propia publicidad. Por eso en alambique primamos la sencillez y creamos plataformas `, <b> atractivas y accesibles</b>, `, aumentando el tiempo de permanencia y así las probabilidades de realizar ventas.`]}
        />
        
        <ContentText 
          titleClasses="ml-56"
          textClasses="" 
          title="UX"
          text={[`UX significa literalmente experiencia de usuario. Es decir, lo que aporta un buen UX a tu marca es la
          calidad del tiempo que un usuario pasa en tu plataforma. Con una investigación, arquitectura de la 
          información, evaluación y pruebas de usabilidad mediante prototipados conseguimos que el usuario se sienta guiado y satisfecho. Un buen UX hace de cualquier interacción con tu marca, una `, <b>buena
          experiencia.</b>]}
        />
        
        <ContentText 
          titleClasses="ml-56"
          textClasses="" 
          title="UI"
          text={[`Si el UX es el arquitecto, UI sería el diseñador de interiores. Para alcanzar la perfección, de nada sirve el uno sin el otro. El diseño de la interfaz de usuario transfiere los puntos fuertes de la marca y los activos visuales a la interfaz de un producto, asegurándose de que el diseño sea consistente, `, <b>coherente </b>, `y estéticamente agradable.`]}
        />
        
        <ContentText 
          titleClasses="ml-56"
          textClasses="" 
          title="Desarollo"
          text={[`Una vez confirmado el diseño y la funcionalidad, desarrollamos la parte interna, conexiones externas, paneles de administración y funciones de tu web o tu app. Utilizamos metodologías de `, <b> desarrollo ágil </b>, `para adaptar la forma de trabajo a las condiciones de cada proyecto.`]}
        />
        
        <ContentText 
          titleClasses="ml-56"
          textClasses="" 
          title="Mantenimento"
          text={[`Una vez publicada la web o la aplicación, nos encargamos de que todo siga funcionando correctamente, corregimos los posibles errores, realizamos actualizaciones para continuar reforzando el UX en base al análisis de datos, y realizamos técnicas de posicionamiento SEO para fomentar el `,<b> aumento de visitas.</b>]}
        />

      </div>
    
      <Contact 
        title={[`¿Programamos`,<br/>, `una cita?`]}
        text={[`Tu web o app no va a mejorar sola. Por`, <br/>,
        `eso actualizar empieza por `, <b>actúa.</b>]}
        impactText="¿Empezamos?"
      />
    </>
  );
}

export default WebApp;