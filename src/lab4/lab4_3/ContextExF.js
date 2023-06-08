import React from "react";

const usecontextEx=React.createContext();
const Contextprovider=usecontextEx.Provider;
const Contextconsume=usecontextEx.Consumer;

export {Contextprovider,Contextconsume};