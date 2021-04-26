import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, of, from} from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DataService } from '../data.service'


@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrls: ['./detailspage.component.css']
})
export class DetailspageComponent implements OnInit {

  movie : any = "";
  subscription$: Subscription | null = null;

  constructor(private service: DataService, private route: ActivatedRoute
    ) { 
  }

  ngOnInit(): void {
        this.subscription$ = this.route.paramMap
        .pipe(switchMap(p => {
          
          const id = p.get('id');

          if (!id) {
            return of(null)
          }
          console.log(this.movie)
          return this.service.getMovieById(+id);
          
      }))
        .subscribe(movie => this.movie = movie);
    
  }

  ngOnDestroy() {
    if (this.subscription$) {
      this.subscription$.unsubscribe();

    }
  }

  favoriteMovies(movie: any) {
    if(!this.service.movieFavorites.some((favorite: any) => favorite.id === movie.id)) {
      this.service.movieFavorites.push(this.movie)
    }
    
    console.log(this.service.movieFavorites)
  }

  movieIsAddedToFavorites() {
    return !this.service.movieFavorites.some((favorite: any) => favorite.id === this.movie.id)
  }

}
