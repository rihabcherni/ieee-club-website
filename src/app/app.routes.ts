import { Routes } from '@angular/router';
import { Alumni2024Component } from './pages/alumni/alumni2024/alumni2024.component';
import { HomeComponent } from './pages/home/home.component';
import { Alumni2023Component } from './pages/alumni/alumni2023/alumni2023.component';
import { Alumni2022Component } from './pages/alumni/alumni2022/alumni2022.component';
import { Alumni2021Component } from './pages/alumni/alumni2021/alumni2021.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { CsComponent } from './pages/chapters/cs/cs.component';
import { AessComponent } from './pages/chapters/aess/aess.component';
import { IasComponent } from './pages/chapters/ias/ias.component';
import { RasComponent } from './pages/chapters/ras/ras.component';
import { PesComponent } from './pages/chapters/pes/pes.component';
import { WieComponent } from './pages/chapters/wie/wie.component';
import { SightComponent } from './pages/chapters/sight/sight.component';
import { ContactComponent } from './pages/contact/contact.component';
import { JoinUsComponent } from './pages/join-us/join-us.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'alumni-2024', component: Alumni2024Component },
  { path: 'alumni-2023', component: Alumni2023Component },
  { path: 'alumni-2022', component: Alumni2022Component },
  { path: 'alumni-2021', component: Alumni2021Component },
  { path: 'gallery', component: GalleryComponent },
  { path: 'chapter/cs', component: CsComponent },
  { path: 'chapter/ras', component: RasComponent },
  { path: 'chapter/ias', component: IasComponent },
  { path: 'chapter/aess', component: AessComponent },
  { path: 'chapter/pes', component: PesComponent },
  { path: 'chapter/wie', component: WieComponent },
  { path: 'chapter/sight', component: SightComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'join-us', component: JoinUsComponent },
];
