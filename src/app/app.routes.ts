import { Routes } from '@angular/router';
import { ValentineComponentComponent } from './Components/valentine-component/valentine-component.component';
import { YesComponentComponent } from './Components/yes-component/yes-component.component';

export const routes: Routes = [
  { path: '', component: ValentineComponentComponent },
  { path: 'yes', component: YesComponentComponent },
];
