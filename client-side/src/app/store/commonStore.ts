import { makeAutoObservable } from "mobx";

export default class  CommonStore {
  darkTheme = false;
  showSettings = false;
  selectedMenuItem = 'home';
  lastMenuItem = 'none';
  
  constructor() {
    makeAutoObservable(this);
  }
  
  setDarkTheme = (value: boolean) => this.darkTheme = value;
  setShowSettings = (value: boolean) => this.showSettings = value;
  setSelectedMenuItem = (value: string) => this.selectedMenuItem = value;
  setLastMenuItem = (value: string) => this.lastMenuItem = value;
}