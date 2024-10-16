import { createContext } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [Count, setCount] = useState("default value");

  return (
    <Context.Provider value={{ Count, setCount }}>
      {children}
    </Context.Provider>
  );
};


export default Provider
