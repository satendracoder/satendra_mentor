import { Component } from '@angular/core';
import { MaterialListModule } from '../../../shared/material-list/material-list.module';

@Component({
  selector: 'app-footer-card',
  standalone: true,
  imports: [MaterialListModule],
  templateUrl: './footer-card.component.html',
  styleUrl: './footer-card.component.scss'
})
export class FooterCardComponent {

}
