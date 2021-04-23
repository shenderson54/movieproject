import { Component, ElementRef, Input, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { DataService } from '../data.service';
import { Genre } from './genre';
import { Rating } from './rating'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
  filterGenre: string | null = null;
  filterSubgenre: string | null = null;
  filterRating: Rating | null = null;
  inputValue: string | null = null;
  query: string | null = null;
  rating: string | null = null;


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
  }


  //genres functions



  // genreSelected(genre: string) {
  //   this.genres.forEach((value, index) => {
  //     if (value.name === genre) this.genres.splice(index, 1)
  //   })
  // }




  //keywords functions
  onKey(event: any) {
    this.inputValue = event.target.value;
    return this.filteredKeywords = this.http.get(
      `https://api.themoviedb.org/3/search/keyword?api_key=f94ce2edb07147fae6c5fe3d18acad2a&query=${this.inputValue}&page=1`
    )
      .pipe(map((data: any) => data.results))


  }

  selected(event: MatAutocompleteSelectedEvent): void {
    let isSelected = this.isSelectedKeyword(event.option.viewValue);

    if (isSelected === false) {
      this.keywords.push(event.option.viewValue);
    }
    this.keywordInput.nativeElement.value = '';
    this.keywordControl.setValue(null);
  };

  remove(keyword: string): void {
    const index = this.keywords.indexOf(keyword);

    if (index >= 0) {
      this.keywords.splice(index, 1);
    };
  };


  isSelectedKeyword(find: string) {
    for (let keyword of this.keywords) {
      if (keyword === find) {
        return true
      }
    }
    return false
  }

  search() {
    this.data.search(this.keywords, this.filterGenre, this.filterSubgenre, this.query, this.rating);
  }


}
