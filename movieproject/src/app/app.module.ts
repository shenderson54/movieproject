import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashscreenComponent } from './splashscreen/splashscreen.component';
import { SearchComponent } from './search/search.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { DetailspageComponent } from './detailspage/detailspage.component';
import { SignInUpComponent } from './signinup/signinup.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashscreenComponent,
    SearchComponent,
    ProfilepageComponent,
    DetailspageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
