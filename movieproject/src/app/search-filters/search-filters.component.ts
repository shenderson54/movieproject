import { Component, ElementRef, Input, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { DataService } from '../data.service';
import { Genre } from './genre';
import { Rating } from './rating'
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { Keyword } from './keyword';


@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.css']
})
export class SearchFiltersComponent implements OnInit {

  genres: Genre[] = [];
  ratings: Rating[] = [];
  filterGenre: number | null = null;
  filterSubgenre: number | null = null;
  filterRating: string | null = null;
  inputValue: string | null = null;
  query: string | null = null;
  dataSubscribe: Subscription | null = null;



  //for keyword autocomplete and chips
  keywordControl = new FormControl();
  visibile = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredKeywords: Observable<any> | null = null;
  keywords: Keyword[] = [];

  @ViewChild('keywordInput') keywordInput!: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete!: MatAutocomplete;

  @Output() searchResults: EventEmitter<any> = new EventEmitter();

  constructor(private data: DataService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.genres = this.data.getGenres();
    this.ratings = this.data.getRatings();
  }

  ngOnDestroy(): void {
    this.dataSubscribe?.unsubscribe();
  }




  //keywords functions
  onKey(event: any) {
    this.inputValue = event.target.value;
    return this.filteredKeywords = this.http.get(
      `https://api.themoviedb.org/3/search/keyword?api_key=f94ce2edb07147fae6c5fe3d18acad2a&query=${this.inputValue}&page=1`
    )
      .pipe(map((data: any) => data.results))


  }

  selected(event: MatAutocompleteSelectedEvent): void {
    let isSelected = this.isSelectedKeyword(event.option.value.name);
    if (isSelected === false) {
      this.keywords.push(event.option.value);
    }
    this.keywordInput.nativeElement.value = '';
    this.keywordControl.setValue(null);
  };



  remove(keyword: number): void {
    this.keywords.splice(keyword, 1)
  };


  isSelectedKeyword(find: string) {
    for (let keyword of this.keywords) {
      if (keyword.name === find) {
        return true
      }
    }
    return false
  }

  search() {
    let keywordsArray = [];
    for (let keyword of this.keywords) {
      keywordsArray.push(keyword.id)
    }

    this.dataSubscribe = this.data.search(
      keywordsArray,
      this.filterGenre,
      this.filterSubgenre,
      this.query,
      this.filterRating
    ).subscribe((response: Observable<any>) => { this.searchResults.emit(response) });
  }


}
