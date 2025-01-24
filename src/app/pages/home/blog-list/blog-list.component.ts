import { Component } from '@angular/core';
import { MenuCardComponent } from "../menu-card/menu-card.component";
import { All_Blog_data } from '../../../core/utils/blogs';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [MenuCardComponent, CommonModule],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent {

  Blog_data = All_Blog_data;

  constructor(
    private _route:Router
  ){}

  redirectRoute(routeName:string){
    this._route.navigateByUrl(routeName);
  }
}
