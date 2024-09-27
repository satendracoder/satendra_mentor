import { Component } from '@angular/core';
import { MaterialListModule } from '../../../shared/material-list/material-list.module';
import { CommonModule } from '@angular/common';
import { MenuCardComponent } from '../../home/menu-card/menu-card.component';
import { FooterCardComponent } from '../../home/footer-card/footer-card.component';

@Component({
  selector: 'app-blog-layout',
  standalone: true,
  imports: [MaterialListModule, CommonModule, MenuCardComponent, FooterCardComponent],
  templateUrl: './blog-layout.component.html',
  styleUrl: './blog-layout.component.scss'
})
export class BlogLayoutComponent {

}
