import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movieconfig } from './movieconfig';
import { Genre } from './search-filters/genre';
import { Keyword } from './search-filters/keyword';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  movieDBConfig = this.http.get(`https://api.themoviedb.org/3/configuration?api_key=f94ce2edb07147fae6c5fe3d18acad2a`)


  genres: Genre[] = [
    {
      id: 28,
      name: "Action",
    },

    {
      id: 12,
      name: "Adventure"
    },
    {
      id: 16,
      name: "Animation"
    },
    {
      id: 35,
      name: "Comedy"
    },
    {
      id: 80,
      name: "Crime"
    },
    {
      id: 99,
      name: "Documentary"
    },
    {
      id: 18,
      name: "Drama"
    },
    {
      id: 10751,
      name: "Family"
    },
    {
      id: 14,
      name: "Fantasy"
    },
    {
      id: 36,
      name: "History"
    },
    {
      id: 27,
      name: "Horror"
    },
    {
      id: 10402,
      name: "Music"
    },
    {
      id: 9648,
      name: "Mystery"
    },
    {
      id: 10749,
      name: "Romance"
    },
    {
      id: 878,
      name: "Science Fiction"
    },
    {
      id: 10770,
      name: "TV Movie"
    },
    {
      id: 53,
      name: "Thriller"
    },
    {
      id: 10752,
      name: "War"
    },
    {
      id: 37,
      name: "Western"
    }
  ];

  constructor(private http: HttpClient) { }

  getGenres() {
    return this.genres;
  }

  getKeyword(keyword: string) {
    return this.http.get(`https://api.themoviedb.org/3/keyword/${keyword}?api_key=f94ce2edb07147fae6c5fe3d18acad2a`);
  }
}
