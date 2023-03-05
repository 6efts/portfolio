import { useContext } from 'react';
import { motion } from 'framer-motion';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { Context as ViewContext } from '../context/view';

const Footer = () => {
  const { state } = useContext(ViewContext);

  return (
    <motion.a
      className={`fixed bottom-5 right-5 cursor-pointer text-s-color`}
      animate={{ opacity: state ? 0 : 1 }}
      href="#Hero"
    >
      <FaArrowAltCircleUp size={60} />
    </motion.a>
  );
};

export default Footer;
