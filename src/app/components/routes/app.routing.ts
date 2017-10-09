import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from '../../authservice/auth-guard.service';
import { HomepageComponent } from '../homepage/homepage';
import { SubjectsComponent } from '../subjects/subjects';
import { HighMathematicsComponent } from '../mathematics/highmathematics/high.mathematics';
import { HighMathResultsComponent } from '../results/highmath_result/highmath_results';
import { DiscretemathematicsComponent } from '../mathematics/discretemathematics/discretemathematics';
import { DiscreteMathResultsComponent } from '../results/discretemath_result/discretemath_result';
// import { CallbackComponent } from '../../callback';

export const routes: Routes = [
  { path: '', redirectTo: 'app-homepage', pathMatch: 'full' },
  { path: 'app-homepage', component: HomepageComponent },
  { path: 'app-subjects', component: SubjectsComponent },
  { path: 'app-high-mathematics', component: HighMathematicsComponent },
  { path: 'app-high-mathematics-results/:res/:no_res', component: HighMathResultsComponent },
  { path: 'app-discrete-mathematics', component: DiscretemathematicsComponent },
  { path: 'app-discrete-mathematics-results/:res_dm/:no_res_dm', component: DiscreteMathResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {  }
