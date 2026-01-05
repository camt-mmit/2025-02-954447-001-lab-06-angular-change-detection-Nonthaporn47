import { Routes } from '@angular/router';
import { TrialOne } from './trial-one/trial-one';
import { TrialTwo } from './trial-two/trial-two';
import { TrialThree } from './trial-three/trial-three';
import { TrialZero } from './trial-zero/trial-zero';
import { LabSixComponent } from './lab-six/lab-six';

export const routes: Routes = [
  { path: '', redirectTo: 'trial-one', pathMatch: 'full' },

  { path: 'trial-one', component: TrialOne },
  { path: 'trial-two', component: TrialTwo },
  { path: 'trial-three', component: TrialThree },
  { path: 'trial-zero', component: TrialZero },
  { path: 'lab-six', component: LabSixComponent },
];
