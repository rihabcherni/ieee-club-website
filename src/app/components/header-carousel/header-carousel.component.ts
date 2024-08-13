import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-header-carousel',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './header-carousel.component.html',
  styleUrl: './header-carousel.component.css'
})
export class HeaderCarouselComponent  {
  title = 'ng-carousel-demo';

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 800,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: true
  }

    slides = [
      {
        id: "1",
        tiltle:"Transform a student's life Donate and make an impact",
        img: "ancien-img/portfolio/app-1.jpg",
        btn1: "About Us",
        btn2: "Our Causes",
      },
      {
        id: "2",
        tiltle:"Lifting the dreams of poor children is like planting seeds",
        img: "ancien-img/portfolio/books-1.jpg",
        btn1: "About Us",
        btn2: "Our Causes",
        text:"they deserve the chance to grow into something beautiful"
      },
      {
        id: "2",
        tiltle:"Lifting the dreams of poor children is like planting seeds",
        img: "ancien-img/portfolio/books-2.jpg",
        btn1: "About Us",
        btn2: "Our Causes",
        text:"they deserve the chance to grow into something beautiful"
      },
    ];
}
