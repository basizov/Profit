import { createContext, useContext } from "react";
import CommonStore from "./commonStore";

interface IStore {
  commonStore: CommonStore;
}

export const  store: IStore = {
  commonStore: new CommonStore()
}

export const  StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
