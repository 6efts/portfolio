import { FaGithub, FaLinkedinIn, FaFacebook, FaDiscord } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Social = () => {
  return (
    <motion.div
      className="flex gap-4 justify-center md:flex-col md:gap-2"
      initial={{ opacity: 0, x: '-100vw' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
    >
      <motion.a
        title="Github"
        href="https://github.com/6efts "
        target="_blank"
        whileHover={{
          scale: 1.3,
        }}
        transition={{ duration: 0.5 }}
      >
        <FaGithub size={33} color="#C4CFD2" className=" cursor-pointer" />
      </motion.a>
      <motion.a
        title="LinkedIn"
        href="https://www.linkedin.com/in/jarren-dehonor/"
        target="_blank"
        whileHover={{
          scale: 1.3,
        }}
        transition={{ duration: 0.5 }}
      >
        <FaLinkedinIn
          size={33}
          color="#C4CFD2"
          className=" cursor-pointer"
          target="_blank"
        />
      </motion.a>
      <motion.a
        title="Discord"
        href="https://discordapp.com/users/542516921275252787"
        whileHover={{
          scale: 1.3,
        }}
        transition={{ duration: 0.5 }}
      >
        <FaDiscord size={33} color="#C4CFD2" className=" cursor-pointer" />
      </motion.a>
      <motion.a
        title="Facebook"
        href="https://www.facebook.com/6efts/"
        target="_blank"
        whileHover={{
          scale: 1.3,
        }}
        transition={{ duration: 0.5 }}
      >
        <FaFacebook size={33} color="#C4CFD2" className=" cursor-pointer" />
      </motion.a>
    </motion.div>
  );
};

export default Social;
