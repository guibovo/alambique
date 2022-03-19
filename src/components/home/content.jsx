import ContentCard from "./content-card";

const Content = () => {
  return(
    <div className="home-content-wrapper">
      <div className="home-content">
        <ContentCard titleClasses="ml-20" title="Qué somos" text={[`Somos una `, <strong>agencia creativa </strong>, <br/>,
            ` especializada en diseño y`, <br/>, 
            `comunicación.`, <br/>,
            `Estudiamos tu marca,`, <br/>,
            `tu mercado, tu competencia,`, <br/>,
            `tus propósitos y tus clientes`, <br/>, 
            `para conseguir fidelizarlos `, <br/>,
            `y atraer públicos nuevos.`]}
        />
        <ContentCard titleClasses="ml-45p" textClasses="ml-45p" title="Nuestra marca" text={[`Una refinería es una industria`, <br/>,
            `que destila una materia`, <br/>,
            `prima para obtener`, <br />,
            `productos de mayor valor`, <br/>,
            `agregado. Nosotros`, <br/>,
            `destilamos briefings en`, <br/>,
            `nuestro alambique y`, <br/>,
            `obtenemos `, <strong> marcas con</strong>, <br/>,
            <strong>esencia </strong>, <br/>, `propia.`]}
        />
        <ContentCard titleClasses="ml-20" title="Con b de Bierzo" text={[`Tenemos clientes hasta en`, <br/>,
          `América, pero estamos basados`, <br/>,
          `en la comarca de El Bierzo, León.`, <br/>,
          `Queremos que generar `, <br/>,
          <strong>empleo local</strong>, ` y de calidad sea`, <br/>,
          `nuestro granito de arena`, <br/>,
          `contra el desierto de la `, <br/>,
          `España vaciada.`]}
        />
        <ContentCard titleClasses="ml-45p" textClasses="ml-45p" title="Equipo" text={[`Somos jóvenes, pero`, <br/>,
        <strong>profesionales.</strong>, ` Aunque la `, <br/>,
        `media de edad en nuestro`, <br/>, 
        `equipo ronda los 30,`, <br/>, 
        `juntamos casi 20 años de`, <br/>, 
        `experiencia en el sector.`]}
        />
      </div>
    </div>
  );
}

export default Content;