import { motion } from 'framer-motion';

const Link = ({ href, children }) => (
  <motion.a
    className="block p-1 hover:bg-yellow-800 hover:text-white lg:inline-block lg:hover:bg-transparent lg:bg-transparent lg:mr-6 lg:text-t-color lg:hover:text-s-color font-Montserrat transition-all duration-400 lg:text-2xl font-bold"
    href={href}
    whileHover={{
      scale: 1.1,
    }}
  >
    {children}
  </motion.a>
);

export default Link;
