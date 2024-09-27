import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss'
})
export class BlogCardComponent {


  Blog_data = [
    {
      blog_image: "assets/images/projects/download.jpeg",
      blog_title: "Redmil Business Mall",
      blog_description: "Redmil Business Mall is a leading business mall in the city.",
      blog_url: "/redmil_business_mall"
    },
    {
      blog_image: "/assets/images/projects/webconvoy.jpeg",
      blog_title: "Webconvoy Pvt Ltd",
      blog_description: " Webconvoy Pvt Ltd is dedicated to mobile and web application............",
      blog_url: "/webconvoy_pvt_Ltd"
    },

    {
      blog_image: "/assets/images/projects/caria.jpg",
      blog_title: "Caria electronic",
      blog_description: "Manufacture of electronic valves and tubes and other electronic.............",
      blog_url: "/caria_electronic"
    },

    {
      blog_image: "/assets/images/projects/learning-e.png",
      blog_title: "Ssbr iNet Hub",
      blog_description: "Ssbr-iNet is an online training provider with the most effective learning.....",
      blog_url: "/ssbr_inet_hub"
    },


  ]
}
