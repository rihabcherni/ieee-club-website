import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderCarouselComponent } from "../../components/header-carousel/header-carousel.component";

@Component({
  selector: 'app-join-us',
  standalone: true,
  imports: [FooterComponent, HeaderCarouselComponent],
  templateUrl: './join-us.component.html',
  styleUrl: './join-us.component.css'
})
export class JoinUsComponent {

}
