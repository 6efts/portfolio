import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ImageSection = ({ image, githubLink, url }) => {
  return (
    <div className="lg:relative rounded-xl lg:flex-1 ">
      <div
        className="text-t-color flex flex-row gap-2 -top-5 p-2 absolute right-4 lg:absolute lg:-right-10 lg:top-10 bg-s-color rounded-2xl lg:border-2 lg:border-s-color 
       "
      >
        <motion.a
          href={githubLink}
          target="_blank"
          whileHover={{
            scale: 1.2,
          }}
          transition={{ duration: 0.5 }}
        >
          <FaGithub size={28} className="fill-white" />
        </motion.a>
        <motion.a
          href={url}
          target="_blank"
          whileHover={{
            scale: 1.2,
          }}
          transition={{ duration: 0.5 }}
        >
          <FaExternalLinkAlt size={28} className="fill-white" />
        </motion.a>
      </div>
      <div>
        <img
          src={image}
          alt="sample image"
          className="rounded-xl border-8 border-s-color"
        />
      </div>
    </div>
  );
};

export default ImageSection;
