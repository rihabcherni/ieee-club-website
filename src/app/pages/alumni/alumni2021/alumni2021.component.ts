import { Component } from '@angular/core';
import { FooterComponent } from '../../../components/footer/footer.component';
import { MemberCardComponent } from "../../../components/member-card/member-card.component";

@Component({
  selector: 'app-alumni2021',
  standalone: true,
  imports: [FooterComponent, MemberCardComponent],
  templateUrl: './alumni2021.component.html',
  styleUrl: './alumni2021.component.css'
})
export class Alumni2021Component {
}
