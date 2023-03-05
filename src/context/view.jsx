import { createContext, useState } from 'react';

export const Context = createContext();

export const Provider = ({ children }) => {
  const [state, setState] = useState(false);
  const [skills, setSkills] = useState([]);

  return (
    <Context.Provider value={{ state, setState, skills, setSkills }}>
      {children}
    </Context.Provider>
  );
};

// props drilling
