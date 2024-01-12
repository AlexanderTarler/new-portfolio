"use client";
import React, { ReactNode, useState, useEffect, useContext, FC } from "react";
import { MyContext } from "./context";

interface GlobalState {
  isBroken: boolean;
}

interface ContextProviderProps {
  children: ReactNode;
}

const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
  const [globalState, setGlobalState] = useState<GlobalState>({
    isBroken: false,
  });

  const [test, setTest] = useState(false);

  const updateGlobalState = (newState: Partial<GlobalState>) => {
    setGlobalState((prevState: any) => ({
      ...prevState,
      ...newState,
    }));
  };

  const contextValue: any = {
    globalState,
    updateGlobalState,
    setTest,
    test,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export default ContextProvider;
