import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  slides = [
    {
      img: 'assets/img/slider1.jpg', 
      title: "Rooms",
      description: "Enjoying a 60 min relaxing massage with delicious almond oil."
    },
    {
      img: 'assets/img/slider2.jpg',
      title: "Restaurant",
      description: "New breakfast experience in your life with best morning scenery"
    },
    {
      img: 'assets/img/slider3.jpg', 
      title: "Lounge Bar",
      description: "Make a unforgetable experience on your journey with adventure"
    },
    {
      img: 'assets/img/slider1.jpg', 
      title: "Rooms",
      description: "Enjoying a 60 min relaxing massage with delicious almond oil."
    },
    {
      img: 'assets/img/slider2.jpg',
      title: "Restaurant",
      description: "New breakfast experience in your life with best morning scenery"
    },
    {
      img: 'assets/img/slider3.jpg', 
      title: "Lounge Bar",
      description: "Make a unforgetable experience on your journey with adventure"
    }
  ];
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
}
