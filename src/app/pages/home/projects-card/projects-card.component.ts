import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { link } from 'fs';


interface Testimonial {
  image: string;
  text: string;
  client: string;
  webitelink: string;
}

@Component({
  selector: 'app-projects-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-card.component.html',
  styleUrl: './projects-card.component.scss'
})
export class ProjectsCardComponent {
  PaidCourse = [
    {
      imgName: "/assets/images/projects/ppf-image.png",
      TitleName: "Paint Protecation flim(PPF)",
      categories: "Created visually appealing design pages for PPF designs and implemented detailed car listings",
      Github: "https://github.com/satendra-rajput",
      LinkLive: "https://eazycool.com.sg/",
      company:"Webconvoy Pvt.Ltd"
    },

    {
      imgName: "/assets/images/projects/gaming.png",
      TitleName: "Gaming Website",
      categories: "Implemented advanced authentication features, including secure login, forget password, and reset password pages",
      Github: "https://github.com/satendra-rajput",
      LinkLive: "https://www.poker9club.com/login",
      company:"Webconvoy Pvt.Ltd"
    },

    {
      imgName: "/assets/images/projects/redmil.png",
      TitleName: "Make Admin for B2B Business",
      categories: " Developed secure login and password, user profiles, detailed transaction and statements pages, QR Code integration, and advanced product etc.",
      Github: "https://github.com/satendracoder",
      LinkLive: "https://redmilbusinessmall.com/admin/Default.aspx",
      company:"Redmil Business Mall"
    },
    {
      imgName: "/assets/images/projects/fintech_web.png",
      TitleName: "Fintech B2B Website for APES, Recharge and etc.",
      categories: "Implemented authentication and authorization mechanisms to secure applications.",
      Github: "https://github.com/satendracoder",
      LinkLive: "https://web.redmilbusinessmall.com",
      company:"Redmil Business Mall"
    },
  ]
}
