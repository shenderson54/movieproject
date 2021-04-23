import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  constructor(private http: HttpClient) { }

  searchMovies(searchTerm: string | null) {
    return this.http.get(`https://api.themoviedb.org/3/search/movie/?api_key=f94ce2edb07147fae6c5fe3d18acad2a&query=${searchTerm}`)
  }

  getMovieById(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/search/movie/${id}?api_key=f94ce2edb07147fae6c5fe3d18acad2a`)
  }

}
