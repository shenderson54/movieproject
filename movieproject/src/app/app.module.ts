import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashscreenComponent } from './splashscreen/splashscreen.component';
import { SearchComponent } from './search/search.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { DetailspageComponent } from './detailspage/detailspage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchFiltersComponent } from './search-filters/search-filters.component';
import { FilterPipe } from './search/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatChipInput, MatChipsModule } from '@angular/material/chips';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';



@NgModule({
  declarations: [
    AppComponent,
    SplashscreenComponent,
    SearchComponent,
    ProfilepageComponent,
    DetailspageComponent,
    NavBarComponent,

    SearchFiltersComponent,
    FilterPipe,


    SearchBarComponent,
  


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatToolbarModule,

    MatFormFieldModule,
    MatChipsModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

   HttpClientModule,
    IvyCarouselModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
