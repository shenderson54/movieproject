import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, of} from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { TmdbService } from '../tmdb.service';


@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrls: ['./detailspage.component.css']
})
export class DetailspageComponent implements OnInit {

  movie : any = "";
  subscription$: Subscription | null = null;

  // routeSub: Subscription;

  constructor(private service: TmdbService, private route: ActivatedRoute
    ) { 
    // this.routeSub: Subscription;
  }

  ngOnInit(): void {
        this.subscription$ = this.route.paramMap
        .pipe(switchMap(p => {
          
          const id = p.get('id');

          if (!id) {
            return of(null)
          }
          
          return this.service.getMovieById(+id);
          
      }))
        .subscribe(movie => this.movie = movie);
  
  
  }

  ngOnDestroy() {
    if (this.subscription$) {
      this.subscription$.unsubscribe();

    }

    // this.routeSub.unsubscribe();
  }

}
