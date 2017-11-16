import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routes } from './homepage.router';
import { HomePageComponent } from './homepage';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomePageComponent
  ],
  bootstrap: [
    HomePageComponent
  ]
})
export class HomePageModule {}
