import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HoverDirective } from './hover.directive';
import { ColorPageComponent } from './color-page/color-page.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { SignUpModalComponent } from './auth/sign-up-modal/sign-up-modal.component';
import { LoginModalComponent } from './auth/login-modal/login-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavigationComponent,
    HoverDirective,
    ColorPageComponent,
    LeaderboardComponent,
    SignUpModalComponent,
    LoginModalComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, ReactiveFormsModule, StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
