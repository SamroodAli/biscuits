import { useContext } from "react";
import { GlobalStateContext } from "./xstate";

export const useStore = () => {
  const globalServices = useContext(GlobalStateContext);
};
