import Hero from "../components/home/hero";
import Content from "../components/home/content";
import Contact from "../components/common/contact";

const Home = () => {
  return(
    <div>
      <Hero />
      <Content />
      <Contact 
        title={[`No te dejaremos`,<br/>, `en `, <i>visto.</i>]}
        text={[`¿Crees que tu empresa necesita mejorar, su imagen? `,<br/>,
          `¿Necesitas una identidad de marca para tu proyecto?`,<br/>,
          `¿Quieres distanciarte de tu competencia?`,<br/>,
          `¿Necesitas publicidad?`]}
        impactText="¡Podemos ayudarte!"
      />
    </div>
  );
}

export default Home;