import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './components/routes/app.routing';
import { HomepageComponent } from './components/homepage/homepage';
import { SubjectsComponent } from './components/subjects/subjects';
import { HighMathematicsComponent } from './components/mathematics/highmathematics/high.mathematics';
import { HighMathResultsComponent } from './components/results/highmath_result/highmath_results';
import { AuthService } from './authservice/auth.service';
import { CallbackComponent } from './callback';
import { AuthGuard } from './authservice/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SubjectsComponent,
    HighMathematicsComponent,
    HighMathResultsComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
