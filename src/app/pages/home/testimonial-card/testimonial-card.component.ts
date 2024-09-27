import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, Renderer2, ElementRef } from '@angular/core';

interface Testimonial {
  image: string;
  text: string;
  client: string;
  webitelink: string;
}


@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-card.component.html',
  styleUrl: './testimonial-card.component.scss'
})
export class TestimonialCardComponent {


  testimonials = [
    {
      image: '/assets/images/redmil.jpeg',
      text: "We were amazed by the professionalism and expertise of the team. The results exceeded our expectations, and our project was completed ahead of schedule. We highly recommend their services to anyone looking for top-notch quality.",
      client: '<strong> Mr. Sagar Singal</strong> (Founder)<br>at Redmil Business Mall',
      webitelink: 'https://www.redmil.in' // Ensure the link includes 'https://'
    },
    {
      image: '/assets/images/webconvoy.jpeg',
      text: "Working with them has been a game-changer for our business. Their attention to detail and commitment to excellence are unparalleled. We couldn't be happier with the results and look forward to future collaborations.",
      client: 'Mr.Gaurav Singh (Entrepreneur) <br>at Webconvoy Pvt Ltd',
      webitelink: 'https://www.webconvoy.com'
    },
    // {
    //   image: '/assets/images/ssbrinet.png',
    //   text: "Ssbr iNet is a software training institute located in Kasganj, India. They offer courses and resources for individuals looking to develop their programming and web development skills.",
    //   client: 'Mr. John Smith<br>at eazycool Penang',
    //   webitelink: 'https://www.ssbrinet.in'
    // },
    {
      image: '/assets/images/ssbrinet.png',
      text: "From start to finish, the team was incredibly professional and responsive. Everything I needed was delivered on time and within budget. Their expertise and customer-focused approach made the entire process smooth and stress-free.",
      client: 'Mr.Satendra Rajput<br>at Ssbr iNet',
      webitelink: 'https://www.ssbrinet.com'
    },

  ];

  currentIndex = 0;
  currentTestimonial: Testimonial = this.testimonials[0];

  constructor() {
    this.currentTestimonial = this.testimonials[this.currentIndex];
  }

  ngOnInit() {
    this.updateTestimonial(this.currentIndex);
  }

  updateTestimonial(index: number) {
    this.currentTestimonial = this.testimonials[index];
  }

  showNextTestimonial() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    this.updateTestimonial(this.currentIndex);
  }

  showPrevTestimonial() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
    this.updateTestimonial(this.currentIndex);
  }

  onPrevButtonClick() {
    this.showPrevTestimonial();
  }

  onNextButtonClick() {
    this.showNextTestimonial();
  }
}  