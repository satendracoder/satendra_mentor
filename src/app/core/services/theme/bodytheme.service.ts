import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BodythemeService {

  private darkThemeClass = 'dark-theme';
  private lightThemeClass = 'light-theme';

  constructor() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      this.setTheme(theme);
    }
  }

  setTheme(theme: string): void {
    if (theme === 'dark') {
      document.body.classList.add(this.darkThemeClass);
      document.body.classList.remove(this.lightThemeClass);
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add(this.lightThemeClass);
      document.body.classList.remove(this.darkThemeClass);
      localStorage.setItem('theme', 'light');
    }
  }

  toggleTheme(): void {
    const currentTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    this.setTheme(currentTheme);
  }

  get currentTheme(): string {
    return localStorage.getItem('theme') || 'light';
  }
}
