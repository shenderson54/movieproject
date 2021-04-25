import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Result } from './result';
import { SearchPage } from './search-page';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  totalPages: any;
  page: number = 1;
  results: Result[] = [];


  constructor(private data: DataService) { }

  ngOnInit(): void {

  }

  setResults(searchResults: any) {
    this.results = searchResults.results;
    console.log(searchResults)
    this.totalPages = searchResults.total_results;
  }


  changePage(event: number) {
    this.page = event;
  }
}
