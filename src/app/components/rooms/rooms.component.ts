import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  @Input() rooms: any = [];

  allRooms:any;

  constructor() {}

  ngOnInit() {
    this.allRooms = this.rooms;
  }
}
