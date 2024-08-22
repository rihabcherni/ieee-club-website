import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-member-card',
  standalone: true,
  imports: [],
  templateUrl: './member-card.component.html',
  styleUrl: './member-card.component.css'
})
export class MemberCardComponent {
  @Input() name: string | undefined;
  @Input() role: string | undefined;
  @Input() image: string | undefined;
  @Input() contactLink: string | undefined;
}
