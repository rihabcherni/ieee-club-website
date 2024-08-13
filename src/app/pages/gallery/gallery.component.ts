import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

}
