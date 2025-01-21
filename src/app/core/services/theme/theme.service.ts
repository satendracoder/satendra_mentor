import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  private isDarkTheme: boolean = false;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);

    const savedTheme = sessionStorage.getItem('isDarkTheme');
    if (savedTheme !== null) {
      this.isDarkTheme = JSON.parse(savedTheme);
    } else {
      sessionStorage.setItem('isDarkTheme', JSON.stringify(this.isDarkTheme));
    }
    this.applyTheme(this.isDarkTheme);
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    sessionStorage.setItem('isDarkTheme', JSON.stringify(this.isDarkTheme));
    localStorage.setItem('isDarkTheme', JSON.stringify(this.isDarkTheme));
    this.applyTheme(this.isDarkTheme);
  }

  applyTheme(isDark: boolean) {
    const body = document.body;

    if (isDark) {
      this.renderer.removeClass(body, 'light-theme');
      this.renderer.addClass(body, 'dark-theme');
    } else {
      this.renderer.removeClass(body, 'dark-theme');
      this.renderer.addClass(body, 'light-theme');
    }
  }

  getCurrentTheme() {
    return this.isDarkTheme;
  }
}