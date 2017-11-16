import { Route  } from '@angular/router';
import { AuthGuard } from './authservice/auth-guard.service';
import { SubjectsComponent } from './components/subjects/subjects';
import { HighMathematicsComponent } from './components/mathematics/highmathematics/high.mathematics';
import { HighMathResultsComponent } from './components/results/highmath_result/highmath_results';
import { DiscretemathematicsComponent } from './components/mathematics/discretemathematics/discretemathematics';
import { DiscreteMathResultsComponent } from './components/results/discretemath_result/discretemath_result';
import { HomePageComponent } from './components/homepage/homepage';
import { CallbackComponent } from './callback';

export const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'app-homepage' },
  { path: 'app-homepage', component: HomePageComponent },
  { path: 'app-subjects', component: SubjectsComponent, canActivate: [ AuthGuard ] },
  { path: 'app-high-mathematics', component: HighMathematicsComponent },
  { path: 'app-high-mathematics-results/:res/:no_res', component: HighMathResultsComponent },
  { path: 'app-discrete-mathematics', component: DiscretemathematicsComponent },
  { path: 'app-discrete-mathematics-results/:res_dm/:no_res_dm', component: DiscreteMathResultsComponent },
  { path: 'callback', component: CallbackComponent }
];
