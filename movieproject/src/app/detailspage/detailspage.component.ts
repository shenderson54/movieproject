import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrls: ['./detailspage.component.css']
})
export class DetailspageComponent implements OnInit {

  movie : any | null = null;
  

  constructor(private service: TmdbService) { }

  ngOnInit(): void {
    this.service.getMovieById(550).subscribe(movie => this.movie = movie)
  }

}
