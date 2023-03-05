import Cards from './Cards';

const Projects = () => {
  return (
    <div
      id="Projects"
      className=" p-8 lg:p-24 lg:flex lg:flex-col lg:gap-48 lg:mt-60 relative"
    >
      <p className="font-Montserrat lg:absolute lg:top-8  text-s-color text-2xl lg:text-4xl lg:font-bold">
        &lt;
        <span className="text-t-color">Projects</span> /&gt;
      </p>
      <Cards />
    </div>
  );
};

export default Projects;
