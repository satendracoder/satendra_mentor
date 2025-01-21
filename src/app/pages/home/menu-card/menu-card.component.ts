import { Component, ElementRef, HostListener, inject, Renderer2, ViewChild } from '@angular/core';
import { MaterialListModule } from '../../../shared/material-list/material-list.module';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { ContactUsComponent } from '../../../shared/components/contact-us/contact-us.component';
import { ThemeService } from '../../../core/services/theme/theme.service';


@Component({
  selector: 'app-menu-card',
  standalone: true,
  imports: [MaterialListModule],
  templateUrl: './menu-card.component.html',
  styleUrl: './menu-card.component.scss'
})
export class MenuCardComponent {

  CloseOpen: boolean = false;
  isChecked?: boolean = false;
  isLoggedIn: boolean = false;
  isDarkMode: boolean = true;
  autherDetails: any = [];

  constructor(public themeService: ThemeService,
    private renderer: Renderer2
  ) { }



  _router = inject(Router);



  ngOnInit(): void {

  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.isDarkMode = !this.isDarkMode;
  }

  //scroll menu
  @ViewChild('myDiv') myDiv!: ElementRef;
  @ViewChild('menuLabel') menuLabel!: ElementRef;




  @HostListener('window:scroll')
  onScroll() {
    if (window.scrollY > 50) {
      this.renderer.addClass(this.myDiv.nativeElement, 'menuscrolled');
      this.renderer.setStyle(this.menuLabel.nativeElement, 'color', 'blue');
    } else {
      this.renderer.removeClass(this.myDiv.nativeElement, 'menuscrolled');
      this.renderer.removeStyle(this.menuLabel.nativeElement, 'color');
    }
  }

  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(ContactUsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  dashboard() {
  }

}
