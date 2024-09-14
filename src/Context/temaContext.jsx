import { createContext, useState } from "react";

export const TemaContext = createContext();
// eslint-disable-next-line react/prop-types
export const TemaProvider = ({children})=> {

  const [tema, setTema] = useState("light");
  const trocaTema = () =>{
    setTema( tema === "light" ? "dark" : "light");
  };

  return(
    <TemaContext.Provider value={{tema, trocaTema}}>
      {children}
    </TemaContext.Provider>
  );
};