// context.ts
import React from "react";

interface GlobalState {
  isBroken: boolean;
}

interface MyContextState {
  globalState: GlobalState;
  updateGlobalState: (newState: Partial<GlobalState>) => void;
}

export const MyContext = React.createContext<MyContextState | undefined>(
  undefined
);
