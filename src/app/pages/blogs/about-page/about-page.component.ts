import { Component } from '@angular/core';
import { AboutCardComponent } from "../../home/about-card/about-card.component";

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [AboutCardComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent {

}
