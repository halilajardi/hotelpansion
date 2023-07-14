import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  rooms = [
    {
      img: "https://pansion.hr/static/media/img_1.5dcf0bb93493a09139a7.jpg",
      title: "Standard room (1 bedroom)",
      describe: "Single room, one bedroom for one person"
    },
    {
      img: "https://pansion.hr/static/media/img_2.f5f3531c4490deac0230.jpg",
      title: "Standard Double Room (1 bedroom)",
      describe: "Double Room, one bedroom for two person"
    },
    {
      img: "https://pansion.hr/static/media/img_3.064f38bd57e1cc1ab7ea.jpg",
      title: "Honeymoon Deluxe (Sunset View)",
      describe: "Deluxe Room, two bedroom for three person"
    }
  ]
}
