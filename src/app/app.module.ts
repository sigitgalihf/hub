import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ClarityModule, ClrFormsNextModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import { PelabuhanComponent } from './pelabuhan/pelabuhan.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PelabuhanComponent,
    HomeComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    NgbModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ClrFormsNextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
