import { makeAutoObservable } from "mobx";

export default class  CommonStore {
  languageMode = 0;
  darkTheme = false;
  showSettings = false;
  selectedMenuItem = 'home';
  lastMenuItem = 'none';
  
  constructor() {
    makeAutoObservable(this);
  }
  
  setLanguageMode = (value: number) => this.languageMode = value;
  setDarkTheme = (value: boolean) => this.darkTheme = value;
  setShowSettings = (value: boolean) => this.showSettings = value;
  setLastMenuItem = (value: string) => this.lastMenuItem = value;
  setSelectedMenuItem = (value: string) => this.selectedMenuItem = value;
}