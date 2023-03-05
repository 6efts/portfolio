import { Typewriter } from 'react-simple-typewriter';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useContext, useEffect } from 'react';
import { Context as ViewContext } from '../../context/view';

import Social from './Social';

const Content = () => {
  const { ref, inView } = useInView();
  const { setState } = useContext(ViewContext);

  useEffect(() => {
    setState(inView);
  }, [setState, inView]);

  return (
    <div>
      <div className="mx-auto relative">
        <div
          ref={ref}
          className="flex flex-col gap-4 py-20 md:flex-row-reverse md:gap-8 md:justify-center md:py-72 mt-32 lg:mt-0 z-0 "
        >
          <motion.div
            className="text-t-color font-bold text-center flex flex-col gap-4 md:text-left md:border-l-2 md:border-s-color md:pl-8 md:py-8 lg:w-[500px]"
            initial={{ opacity: 0, x: '80vw' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            type="tween"
          >
            <p className="text-3xl lg:text-4xl ">
              Hi,
              <br />
              I'm <span className="text-s-color">Vince</span>,<br />
              <span className="text-s-color ">
                <Typewriter
                  words={['Full-stack Web Developer']}
                  loop={true}
                  cursor
                  cursorStyle="|"
                />
              </span>
            </p>
          </motion.div>
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Content;
