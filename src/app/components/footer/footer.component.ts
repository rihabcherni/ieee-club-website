import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input() logoSrc: string = 'img/logos/ieee.png';
  @Input() aboutText: string = 'ENSIT Student Branch, since 2013, embraces IEEE\'s values for innovation and humanity. 120+ members strong, we advance skills for a better engineering future.';
  @Input() footerBackgroundColor: string = 'var(--sb-color)';

  @Input() footerEmail: string='ieee.ensit.student.branch@gmail.com';
  @Input() footerPhone: string='+216 95 741 882';

  @Input() footerFacebook: string='https://www.facebook.com/ieee.ensit/';
  @Input() footerLinkedin: string='https://www.linkedin.com/company/ieee-ensit-student-branch';
  @Input() footerYoutube: string='https://www.youtube.com/@ieeeensitstudentbranch';
  @Input() footerinstagram: string='https://www.instagram.com/ieee_ensit_student_branch/';
}
