import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Genre } from './genre';


@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.css']
})
export class SearchFiltersComponent implements OnInit {

  genres!: Genre[];

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.genres = this.data.getGenres();
  }

}
