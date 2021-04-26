import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.component.html',
  styleUrls: ['./splashscreen.component.css']
})
export class SplashscreenComponent implements OnInit {

  constructor(private data: DataService) {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('oninit');
    this.data.getPopularMovies().subscribe(movies => {
      console.log('loaded');
      this.images = movies.map((movie: any) => ({
             path: `https://image.tmdb.org/t/p/w154${movie.poster_path}`}))})

  }
  images: any[] = [
     
  ]
  arrowsOutside = true
  
}


