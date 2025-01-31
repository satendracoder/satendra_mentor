import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { MaterialListModule } from '../../../shared/material-list/material-list.module';
import { SkillslistService } from '../../../core/services/skills/skillslist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills-card',
  standalone: true,
  imports: [CommonModule, MaterialListModule],
  templateUrl: './skills-card.component.html',
  styleUrl: './skills-card.component.scss'
})
export class SkillsCardComponent {

  skills = [
    { name: 'HTML', image: '/assets/images/Html-modified.png', description: 'HTML is the standard markup language for creating web pages.' },
    { name: 'CSS', image: '/assets/images/css-modified.png', description: 'CSS is used for describing the presentation of a document written in HTML.' },
    { name: 'JavaScript', image: '/assets/images/js-modified.png', description: 'JavaScript is a versatile programming language for web development.' },
    { name: 'TypeScript', image: '/assets/images/ts-modified.png', description: 'TypeScript is a strongly typed superset of JavaScript.' },
    { name: 'Angular', image: '/assets/images/Angular-modified.png', description: 'Angular is a platform for building mobile and desktop web applications.' },
    { name: 'Java', image: '/assets/images/java-modified.png', description: 'Java is a high-level, class-based, object-oriented programming language.' },
    { name: 'Spring Boot', image: '/assets/images/Spring Boot-modified.png', description: 'Spring Boot is a framework for building production-ready Java applications.' },
    { name: 'MySQL', image: '/assets/images/mysql-modified.png', description: 'MySQL is a popular open-source relational database management system.' },
    { name: 'Node.js', image: '/assets/images/Nodejs-modified.png', description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.' },
    { name: 'Express', image: '/assets/images/express-modified.png', description: 'Express is a minimal and flexible Node.js web application framework.' },
    { name: 'MongoDB', image: '/assets/images/mongodb-modified.png', description: 'MongoDB is a document-oriented NoSQL database used for high volume data storage.' }
  ];

  selectedSkill: any = this.skills[0]; // Default to the first skill

  onSkillClick(skill: any) {
    this.selectedSkill = skill;
  }

}
