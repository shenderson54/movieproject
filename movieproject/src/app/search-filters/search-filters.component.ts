import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Genre } from './genre';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.css']
})
export class SearchFiltersComponent implements OnInit {

  genres: Genre[] = []
  filterGenre: Genre | null = null;
  filterSubgenre: Genre | null = null;
  results: Observable<any> | null = null;
  inputValue: string | null = null;

  constructor(private data: DataService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.genres = this.data.getGenres();
  }

  onKey(event: any) {
    this.inputValue = event.target.value;
    this.results = this.http.get(
      `https://api.themoviedb.org/3/search/keyword?api_key=f94ce2edb07147fae6c5fe3d18acad2a&query=${this.inputValue}&page=1`
    )
      .pipe(map((data: any) => data.results))


  }

}
