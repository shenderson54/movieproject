import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
selector: 'favorites-component',
templateUrl: './favorites.component.html',
styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

movieFavorites: any;

constructor(private service: DataService) {
}

ngOnInit(){
    this.movieFavorites = this.service.movieFavorites;
    console.log(this.service.movieFavorites)
}

removeMovieFromFavorites(movie: any) {
    let movieList = this.service.movieFavorites.indexOf(movie);
    this.service.movieFavorites.splice(movieList, 1);
    console.log(this.service.movieFavorites)
}

}