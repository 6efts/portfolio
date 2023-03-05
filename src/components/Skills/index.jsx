import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import html5 from '../../assets/svg/html5.svg';
import css3 from '../../assets/svg/css3.svg';
import sass from '../../assets/svg/sass.svg';
import tailwind from '../../assets/svg/tailwind.svg';
import javascript from '../../assets/svg/javascript.svg';
import mui from '../../assets/svg/mui.svg';
import bootstrap from '../../assets/svg/bootstrap.svg';
import react from '../../assets/svg/react.svg';
import typescript from '../../assets/svg/typescript.svg';
import nodejs from '../../assets/svg/nodejs.svg';
import expressjs from '../../assets/svg/expressjs.svg';
import mongodb from '../../assets/svg/mongodb.svg';
import jsonserver from '../../assets/svg/jsonserver.svg';
import firebase from '../../assets/svg/firebase.svg';
import figma from '../../assets/svg/figma.svg';
import photoshop from '../../assets/svg/photoshop.svg';
import postman from '../../assets/svg/postman.svg';
import insomnia from '../../assets/svg/insomnia.svg';
import gitlab from '../../assets/svg/gitlab.svg';
import github from '../../assets/svg/github.svg';

const Skills = () => {
  const animation = useAnimation();
  const { ref, inView } = useInView({});

  const technologies = {
    frontEnd: [
      {
        name: 'HTML 5',
        image: html5,
      },
      {
        name: 'CSS 3',
        image: css3,
      },
      {
        name: 'Sass',
        image: sass,
      },
      {
        name: 'Tailwind',
        image: tailwind,
      },
      {
        name: 'Javascript',
        image: javascript,
      },
      {
        name: 'Material UI',
        image: mui,
      },
      {
        name: 'Bootstrap',
        image: bootstrap,
      },
      {
        name: 'React',
        image: react,
      },
      {
        name: 'Typescript',
        image: typescript,
      },
    ],
    backEnd: [
      {
        name: 'Node JS',
        image: nodejs,
      },
      {
        name: 'Express JS',
        image: expressjs,
      },
      {
        name: 'Mongo DB',
        image: mongodb,
      },
      {
        name: 'JSON Server',
        image: jsonserver,
      },
      {
        name: 'Firebase',
        image: firebase,
      },
    ],
    others: [
      {
        name: 'Figma',
        image: figma,
      },
      {
        name: 'Photoshop',
        image: photoshop,
      },
      {
        name: 'Postman',
        image: postman,
      },
      {
        name: 'Insomnia',
        image: insomnia,
      },
      {
        name: 'Gitlab',
        image: gitlab,
      },
      {
        name: 'Github',
        image: github,
      },
    ],
  };

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    } else {
      animation.start({
        opacity: 0,
        transition: {
          duration: 0.5,
        },
      });
    }
  }, [inView]);

  const styles = {
    container: 'p-4 flex-1 bg-t-color rounded-xl text-center',
    box: 'w-full flex flex-wrap gap-6 p-6 lg:p-1 bg-t-color justify-center ',
    items:
      'flex flex-col items-center justify-center text-p-color gap-3 p-4 md:gap-4 md:p-2 md:w-28 lg:w-32 lg:p-4 rounded-xl shadow-xl hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-80',
    title: 'font-Montserrat font-bold text-2xl',
    label: 'text-p-color font-Montserrat font-bold',
  };

  return (
    <motion.div
      id="Skills"
      ref={ref}
      animate={animation}
      // className="flex flex-row lg:flex-row p-8 gap-6 text-center lg:p-36 lg:gap-10 relative lg:my-24 "
      className="flex flex-col p-8 gap-6 lg:mt-60"
    >
      <p className="font-Montserrat text-s-color text-2xl lg:text-4xl lg:text-right lg:font-bold">
        &lt;
        <span className="text-t-color">Skills</span> /&gt;
      </p>

      <div className="flex flex-col gap-6 lg:flex-row">
        <div className={styles.container}>
          <p className={styles.title}>Frontend</p>
          <div className={styles.box}>
            {technologies.frontEnd.map(({ name, image }, index) => (
              <div key={index} className={styles.items}>
                <img src={image} alt="html" />
                <p className={`${styles.label}`}>{name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={`${styles.container}  `}>
          <p className={`${styles.title}`}>Backend</p>
          <div className={`${styles.box}`}>
            {technologies.backEnd.map(({ name, image }, index) => (
              <div key={index} className={`${styles.items}  `}>
                <div className="w-14">
                  <img src={image} alt="nodejs" />
                </div>
                <p className={`${styles.label}`}>{name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={`${styles.container}  `}>
          <p className={`${styles.title}`}>Others</p>
          <div className={`${styles.box}`}>
            {technologies.others.map(({ name, image }, index) => (
              <div key={index} className={`${styles.items}  `}>
                <div className="w-14">
                  <img src={image} alt="figma" />
                </div>
                <p className={`${styles.label}`}>{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
