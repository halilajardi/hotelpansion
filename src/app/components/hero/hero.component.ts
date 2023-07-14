import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Input() imageUrl: string = "";
  @Input() firstParag: string = "";
  @Input() firstTitle: string = "";
  @Input() secondTitle: string = "";
  @Input() secondParag: string = "";
  @Input() heroBg: string = "";
}
