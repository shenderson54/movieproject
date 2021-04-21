import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { DataService } from '../data.service';
import { Genre } from './genre';
import { Rating } from './rating'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';


@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.css']
})
export class SearchFiltersComponent implements OnInit {

  genres: Genre[] = [];
  ratings: Rating[] = [];
  filterGenre: Genre | null = null;
  filterSubgenre: Genre | null = null;
  filterRating: Rating | null = null;
  inputValue: string | null = null;


  //for keyword autocomplete and chips
  keywordControl = new FormControl();
  visibile = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredKeywords: Observable<any> | null = null;
  keywords: string[] = [];

  @ViewChild('keywordInput') keywordInput!: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete!: MatAutocomplete;

  constructor(private data: DataService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.genres = this.data.getGenres();
    this.ratings = this.data.getRatings();
    // this.keywords = this.data.getKeywords();
  }

  onKey(event: any) {
    this.inputValue = event.target.value;
    return this.filteredKeywords = this.http.get(
      `https://api.themoviedb.org/3/search/keyword?api_key=f94ce2edb07147fae6c5fe3d18acad2a&query=${this.inputValue}&page=1`
    )
      .pipe(map((data: any) => data.results))


  }

  add(event: any): void {

    this.keywords.push(event.name);

    //reset input value
    this.keywordControl.setValue(null);



  };

  remove(keyword: string): void {
    const index = this.keywords.indexOf(keyword);

    if (index >= 0) {
      this.keywords.splice(index, 1);
    };
  };

  selected(event: MatAutocompleteSelectedEvent): void {
    this.keywords.push(event.option.viewValue);
    this.keywordInput.nativeElement.value = '';
    this.keywordControl.setValue(null);
  };


}
