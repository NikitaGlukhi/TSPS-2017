import { Component } from '@angular/core';
import { AuthService } from './authservice/auth.service';

@Component({
  template: ``
})

export class CallbackComponent {
  constructor(private authService: AuthService) {
     this.authService.handleAuth();
  }
}
