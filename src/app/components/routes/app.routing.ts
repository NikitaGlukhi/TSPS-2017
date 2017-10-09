import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from '../../authservice/auth-guard.service';
import { HomepageComponent } from '../homepage/homepage';
import { SubjectsComponent } from '../subjects/subjects';
import { HighMathematicsComponent } from '../mathematics/highmathematics/high.mathematics';
import { HighMathResultsComponent } from '../results/highmath_result/highmath_results';
// import { CallbackComponent } from '../../callback';

export const routes: Routes = [
  { path: '', redirectTo: 'app-homepage', pathMatch: 'full' },
  { path: 'app-homepage', component: HomepageComponent },
  { path: 'app-subjects', component: SubjectsComponent },
  { path: 'app-high-mathematics', component: HighMathematicsComponent },
  { path: 'app-high-mathematics-results/:res/:no_res', component: HighMathResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {  }
