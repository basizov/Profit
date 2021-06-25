import { makeAutoObservable } from "mobx";

export default class  CommonStore {
  darkTheme = false;
  
  constructor() {
    makeAutoObservable(this);
  }
  
  setDarkTheme = (value: boolean) => this.darkTheme = value;
}