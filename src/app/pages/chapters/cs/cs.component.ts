import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-cs',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './cs.component.html',
  styleUrl: './cs.component.css'
})
export class CsComponent {

}
