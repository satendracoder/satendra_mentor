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
}