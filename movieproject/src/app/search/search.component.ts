import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Result } from './result';
import { SearchPage } from './search-page';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  pagesArray: Array<number> = [];
  currentPage: number = 1;
  results: Result[] = [];


  @Input() set setPagination(pagination: SearchPage) {
    if (pagination) {
      const pagesAmount = Math.ceil(
        pagination.itemsCount / pagination.pageSize
      );
      this.pagesArray = new Array(pagesAmount).fill(1);
    }
  }

  constructor(private data: DataService) { }

  ngOnInit(): void {

  }

  setResults(searchResults: any) {
    this.results = searchResults.results;
  }

}
