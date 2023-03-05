import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import prof from '../../assets/final.png';

const About = () => {
  const animation = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 1,
          bounce: 0.1,
        },
      });
    } else {
      animation.start({
        x: '-100vw',
        transition: {
          duration: 1,
        },
      });
    }
  }, [inView]);

  return (
    <div
      id="About"
      ref={ref}
      className="flex flex-col items-center mt-4 md:mt-0 lg:mt-40 xl:flex-row"
    >
      <motion.div className="lg:ml-36" animate={animation}>
        <img className="w-80 lg:w-[650px]" src={prof} alt="profile" />
      </motion.div>
      <motion.div
        className="p-8 lg:flex-1 lg:p-40 relative"
        animate={animation}
      >
        <p className="text-s-color font-Montserrat my-6 text-2xl lg:text-4xl lg:font-bold">
          &lt;
          <span className="text-t-color">About</span> /&gt;
        </p>
        <p className="text-[#C4CFD2] lg:text-xl">
          I'm a <span className="text-[#D67835]">Full-Stack Web Developer</span>{' '}
          and I create modern website designs. I made this{' '}
          <span className="text-[#D67835]">portfolio</span> to showcase
          everything that I learned and to{' '}
          <span className="text-[#D67835]">inspire</span> others. I am still
          improving my skills by{' '}
          <span className="text-[#D67835]">exploring</span> new things and
          building small projects from{' '}
          <span className="text-[#D67835]">scratch</span>. I love to solve
          problems as it <span className="text-[#D67835]">enhance</span> my
          logical thinking.
        </p>
        <motion.a
          href="https://drive.google.com/u/0/uc?id=17jrOEdNVstMmm1_ZiIeHh98lvb1yPdMa&export=download"
          target="_blank"
          className="border-2 border-s-color p-2 inline-block mt-4 rounded text-white hover:bg-s-color duration-300 text-md font-Montserrat"
          download
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
        >
          Download CV
        </motion.a>
      </motion.div>
    </div>
  );
};

export default About;
