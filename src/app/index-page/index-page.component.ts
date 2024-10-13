import { Component } from '@angular/core';
import { MenuCardComponent } from '../pages/home/menu-card/menu-card.component';
import { BannerCardComponent } from '../pages/home/banner-card/banner-card.component';
import { SkillsCardComponent } from '../pages/home/skills-card/skills-card.component';
import { ProjectsCardComponent } from '../pages/home/projects-card/projects-card.component';
import { AboutCardComponent } from '../pages/home/about-card/about-card.component';
import { FooterCardComponent } from '../pages/home/footer-card/footer-card.component';
import { ExperienceComponent } from '../pages/home/experience/experience.component';
import { TestimonialCardComponent } from '../pages/home/testimonial-card/testimonial-card.component';
import { BlogCardComponent } from "../pages/home/blog-card/blog-card.component";
import { CodeLekhakComponent } from "../pages/home/code-lekhak/code-lekhak.component";

@Component({
  selector: 'app-index-page',
  standalone: true,
  imports: [
    MenuCardComponent,
    BannerCardComponent,
    SkillsCardComponent,
    ProjectsCardComponent,
    AboutCardComponent,
    ExperienceComponent,
    FooterCardComponent,
    TestimonialCardComponent,
    BlogCardComponent,
    CodeLekhakComponent
],
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.scss'
})
export class IndexPageComponent {

}
