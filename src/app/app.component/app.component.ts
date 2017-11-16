import { Component } from '@angular/core';
import { AuthService } from '../authservice/auth.service';

@Component({
  selector: 'app-root',
  template: `
    <h1 style="text-align: center">{{ title }}</h1>

    <ul>
      <li><a routerLink="/app-homepage" routerLinkActive="active">Главная</a></li>
      <li><a routerLink="/app-subjects" routerLinkActive="active">Дисциплины</a></li>
    </ul>
    <ul>
      <li>
        <a *ngIf="!authService.authenticated" (click)="authService.login()">Log In</a>
      </li>
      <li>
        <a *ngIf="authService.authenticated" (click)="authService.logout()">Log Out</a>
      </li>
    </ul>
    <div class="col-sm-12">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Tests';

  constructor(private authService: AuthService) { }

}
