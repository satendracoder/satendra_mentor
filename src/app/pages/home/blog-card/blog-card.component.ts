import { Component } from '@angular/core';
import { MaterialListModule } from '../../../shared/material-list/material-list.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [MaterialListModule, CommonModule],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss'
})
export class BlogCardComponent {


  Blog_data = [
    {
      blog_image: "/assets/images/projects/ppf-image.png",
      blog_title: "Paint Protecation flim(PPF)",
      blog_description: "Created visually appealing design pages for PPF designs and implemented.",
      blog_url: "/redmil_business_mall"
    },
    {
      blog_image: "/assets/images/projects/gaming.png",
      blog_title: "Gaming Website (Poker9club)",
      blog_description: "Implemented advanced authentication features, including secure login, forget.........",
      blog_url: "/Poker9club"
    },

    {
      blog_image: "/assets/images/projects/redmil.png",
      blog_title: "Make Admin for B2B Business",
      blog_description: "Developed secure login and password, user profiles, detailed transaction..........",
      blog_url: "/redmil"
    },

    {
      blog_image: "/assets/images/projects/fintech_web.png",
      blog_title: "Fintech B2B Website for APES, Recharge",
      blog_description: "Implemented authentication and authorization mechanisms to secure applications.....",
      blog_url: "/fintech_web"
    },

  ]

}
