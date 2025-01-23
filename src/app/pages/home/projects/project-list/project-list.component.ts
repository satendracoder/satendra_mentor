import { Component } from '@angular/core';
import { projects_list } from '../../../../core/utils/projects';
import { MaterialListModule } from '../../../../shared/material-list/material-list.module';
import { CommonModule } from '@angular/common';
import { MenuCardComponent } from "../../menu-card/menu-card.component";

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [MaterialListModule, CommonModule, MenuCardComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {

  PaidCourse = projects_list;
}
