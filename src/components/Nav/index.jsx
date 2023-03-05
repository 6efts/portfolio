import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGripLines, FaTimes } from 'react-icons/fa';
import Link from './Link';

const styles = {
  container:
    'absolute bg-t-color lg:border-none  border-b-2 border-b-s-color w-full text-center top-0 transition-all duration-300 lg:fixed lg:translate-y-0 lg:relative lg:bg-transparent',
};

const Nav = () => {
  const [open, setOpen] = useState(false);
  const Links = [
    {
      name: 'ABOUT',
      url: '#About',
    },
    {
      name: 'SKILLS',
      url: '#Skills',
    },
    {
      name: 'PROJECTS',
      url: '#Projects',
    },
  ];

  return (
    <div id="Hero" className="z-1">
      <button
        type="button"
        className="absolute right-4 top-2 text-white lg:hidden"
        onClick={() => setOpen((prev) => !prev)}
      >
        <FaGripLines size={30} color="#d67835" />
      </button>
      <div className={`${styles.container} ${!open && '-translate-y-full'}`}>
        <button
          type="button"
          className="lg:hidden absolute top-4 right-6"
          onClick={() => setOpen((prev) => !prev)}
        >
          <FaTimes size={30} color="#d67835" />
        </button>
        <nav>
          <motion.ul
            className="lg:flex lg:justify-center p-8 "
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {Links.map(({ name, url }) => (
              <li key={name}>
                <Link href={url}>{name}</Link>
              </li>
            ))}
          </motion.ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
