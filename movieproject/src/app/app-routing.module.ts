import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { SearchComponent } from './search/search.component';
import { SplashscreenComponent } from './splashscreen/splashscreen.component';
import { SignInUpComponent } from './signinup/signinup.component';
import { DetailspageComponent } from './detailspage/detailspage.component';


const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: '', component: SplashscreenComponent },
  { path: '', component: ProfilepageComponent },
  { path: '', component: SignInUpComponent },
  { path: '', component: DetailspageComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
