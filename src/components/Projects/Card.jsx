import Textfield from './Textfield';
import ImageSection from './ImageSection';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Card = ({ type, image, value, title, technologies, githubLink, url }) => {
  const animation = useAnimation();
  const { ref, inView } = useInView({});

  useEffect(() => {
    animation.start({
      x: inView ? 0 : '-50vw',
      transition: {
        type: 'spring',
        duration: inView ? 1 : 0.1,
        bounce: 0.2,
      },
    });

    if (!inView && type === 'reverse') {
      animation.start({
        x: inView ? 0 : '100vw',
        transition: {
          type: 'spring',
          duration: inView ? 1 : 0.1,
          bounce: 0.2,
        },
      });
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <motion.div
        className={`flex ${
          type === 'default' ? 'lg:flex-row' : 'lg:flex-row-reverse'
        }   gap-4 lg:gap-14 lg:flex-row flex-col`}
        animate={animation}
      >
        <ImageSection image={image} githubLink={githubLink} url={url} />
        <Textfield value={value} title={title} technologies={technologies} />
      </motion.div>
    </div>
  );
};

Card.defaultProps = {
  type: 'default',
};

export default Card;
