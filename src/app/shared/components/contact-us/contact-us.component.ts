import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MaterialListModule } from '../../material-list/material-list.module';


@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, MaterialListModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
}