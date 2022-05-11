import Hero from "../components/home/hero";
import Content from "../components/home/content";
import Contact from "../components/common/contact";

const Home = () => {
  return(
    <div>
      <Hero />
      <Content />
      <Contact 
        title={[`No te dejaremos`,<br/>, `en `, <i style={{fontWeight: 400}}>visto.</i>]}
        text={[`¿Crees que tu empresa necesita mejorar`,<br/>,
          `su imagen? `,<br/>,
          `¿Necesitas una identidad de marca para`,<br/>,
          `tu proyecto?`,<br/>,
          `¿Quieres distanciarte de tu competencia?`,<br/>,
          `¿Necesitas publicidad?`]}
        impactText="¡Podemos ayudarte!"
      />
    </div>
  );
}

export default Home;