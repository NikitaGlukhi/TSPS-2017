import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component/app.component';
import { HttpModule } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routes } from './app.routing';
import { HomePageComponent } from './components/homepage/homepage';
import { SubjectsComponent } from './components/subjects/subjects';
import { HighMathematicsComponent } from './components/mathematics/highmathematics/high.mathematics';
import { HighMathResultsComponent } from './components/results/highmath_result/highmath_results';
import { AuthService } from './authservice/auth.service';
import { CallbackComponent } from './callback';
import { AuthGuard } from './authservice/auth-guard.service';
import { DiscretemathematicsComponent } from './components/mathematics/discretemathematics/discretemathematics';
import { DiscreteMathResultsComponent } from './components/results/discretemath_result/discretemath_result';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SubjectsComponent,
    HighMathematicsComponent,
    HighMathResultsComponent,
    DiscretemathematicsComponent,
    DiscreteMathResultsComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      routes,
      {
        useHash: true
      }
    )
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {  }

platformBrowserDynamic().bootstrapModule(AppModule);

