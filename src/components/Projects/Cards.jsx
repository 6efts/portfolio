import Card from './Card';

import proj1 from '../../assets/projects/axie.jpg';
import proj2 from '../../assets/projects/todo.jpg';
import proj3 from '../../assets/projects/pokemon.jpg';
import proj4 from '../../assets/projects/clothingecom1.jpg';
import proj5 from '../../assets/projects/travelapp.jpg';
import proj6 from '../../assets/projects/clothingecom2.jpg';

const Cards = () => {
  return (
    <div className="flex flex-col gap-36 lg:gap-60">
      <Card
        title="AXIE INFINITY SKILL GUIDE"
        technologies="HTML5, CSS3"
        image={proj1}
        value="This website is all about NFT Game named AXIE INFINITY it is a guide
      for people who wants to invest in the game. You can learn the skills
      and parts of the character called AXIE's and other details about the
      game."
        githubLink="https://github.com/6efts/nft-axie-guide"
        url="https://nft-axie-guide.vercel.app/"
      />

      <Card
        type="reverse"
        title="TASK/TODOs APP"
        technologies="React JS, Tailwind CSS, "
        value="I created normal Task or todos app where i can add, and delete tasks"
        image={proj2}
        githubLink="https://github.com/6efts/TO-DO--APP"
        url="https://to-do-app-omega-one.vercel.app/"
      />

      <Card
        title="POKEMON APP GUIDE"
        technologies="React JS, Axios, SaSS/ScSS "
        value="This website is connected to online API to get the data, and its all about Pokemon guides and types and other details about pokemons"
        image={proj3}
        githubLink="https://github.com/6efts/pokemon-app"
        url="https://pokemon-app-sigma-beige.vercel.app/pokemon"
      />

      <Card
        type="reverse"
        title="CLOTHING E-COMMERCE APP "
        technologies="React JS , CSS3, SaSS/ScSS "
        value="We created an E-Commerce website app which you can buy and store it to cart and pay it but it has no backend."
        image={proj4}
        githubLink="https://github.com/6efts/clothing-ecommerce-app"
        url="https://clothing-ecommerce-app-lilac.vercel.app/"
      />

      <Card
        title="TRAVEL TOURS APP "
        technologies="React JS, Node JS, Mongo DB"
        value="The website is called Layag tours which layag means is to sail or in other words to travel but the application is exclusive places in the philippines. The functionality of the app is like any normal travel app"
        image={proj5}
        githubLink="https://github.com/6efts/layag-tours-fe"
        url="https://layag-travels.vercel.app/"
      />

      <Card
        type="reverse"
        title="CLOTHING E-COMMERCE APP "
        technologies="Vite, Redux, Tailwind CSS, Flowbite CSS, Axios, Typescript, JSON Server  "
        value="We created an E-Commerce website app which you can buy and store it to cart and pay it but it has no backend."
        image={proj6}
        githubLink="https://github.com/6efts/e-commerce-ts-redux"
        url="https://e-commerce-ts-redux.vercel.app/dashboard"
      />
    </div>
  );
};

export default Cards;
