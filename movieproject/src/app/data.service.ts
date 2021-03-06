import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { Movieconfig } from './movieconfig';
import { Genre } from './search-filters/genre';
// import { Keyword } from './search-filters/keyword';
import { Rating } from './search-filters/rating';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  movieDBConfig = this.http.get(`https://api.themoviedb.org/3/configuration?api_key=f94ce2edb07147fae6c5fe3d18acad2a`)

  movieFavorites: any[] = [];

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


  ratings: Rating[] = [
    {
      certification: "NR",
      meaning: "No rating information.",
      order: 0
    },

    {
      certification: "G",
      meaning: "All ages admitted. There is no content that would be objectionable to most parents. This is one of only two ratings dating back to 1968 that still exists today.",
      order: 1
    },
    {
      certification: "PG",
      meaning: "Some material may not be suitable for children under 10. These films may contain some mild language, crude/suggestive humor, scary moments and/or violence. No drug content is present. There are a few exceptions to this rule. A few racial insults may also be heard.",
      order: 2
    },

    {
      certification: "PG-13",
      meaning: "Some material may be inappropriate for children under 13. Films given this rating may contain sexual content, brief or partial nudity, some strong language and innuendo, humor, mature themes, political themes, terror and/or intense action violence. However, bloodshed is rarely present. This is the minimum rating at which drug content is present.",
      order: 3
    },
    {
      certification: "R",
      meaning: "Under 17 requires accompanying parent or adult guardian 21 or older. The parent/guardian is required to stay with the child under 17 through the entire movie, even if the parent gives the child/teenager permission to see the film alone. These films may contain strong profanity, graphic sexuality, nudity, strong violence, horror, gore, and strong drug use. A movie rated R for profanity often has more severe or frequent language than the PG-13 rating would permit. An R-rated movie may have more blood, gore, drug use, nudity, or graphic sexuality than a PG-13 movie would admit.",
      order: 4
    },

    {
      certification: "NC-17",
      meaning: "These films contain excessive graphic violence, intense or explicit sex, depraved, abhorrent behavior, explicit drug abuse, strong language, explicit nudity, or any other elements which, at present, most parents would consider too strong and therefore off-limits for viewing by their children and teens. NC-17 does not necessarily mean obscene or pornographic in the oft-accepted or legal meaning of those words.",
      order: 5
    },
  ];

  constructor(private http: HttpClient) { }

  getGenres() {
    return this.genres;
  }

  getRatings() {
    return this.ratings;
  }


  search(
    keywords: number[],
    genre: number | null,
    subgenre: number | null,
    query: string | null = null,
    rating: string | null,
    page: number = 1
  ): Observable<any> {

    let url = '';


    if (genre && subgenre && genre !== subgenre) {
      url += `&with_genres=${genre},${subgenre}`;
    } else {
      if (genre) {
        url += `&with_genres=${genre}`;
      } else if (subgenre) {
        url += `&with_genres=${subgenre}`;
      }
    }


    if (rating && rating === 'NC-17') {
      url = url + `&certification_country=US&certification.gte=${rating}`;
    } else if (rating) {
      url = url + `&certification_country=US&certification=${rating}`;
    }

    if (keywords.length) {
      let keywordString = keywords?.join(',');
      url = url + `&with_keywords=${keywordString}`;
    }


    console.log(url)
    if (query) {
      url = url + `&query=${query}`;
      return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=f94ce2edb07147fae6c5fe3d18acad2a${url}&page=${page}`);
    }
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=f94ce2edb07147fae6c5fe3d18acad2a${url}&page=${page}`);

  }
  getPopularMovies() {
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=f94ce2edb07147fae6c5fe3d18acad2a`).pipe(map((response: any) => {
      console.log('loading in data');
      return response.results
    }));
  } 

  searchMovies(searchTerm: string | null) {
    return this.http.get(`https://api.themoviedb.org/3/search/movie/?api_key=f94ce2edb07147fae6c5fe3d18acad2a&query=${searchTerm}`)
  }

  getMovieById(id: number | null) {
    console.log(id)
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=f94ce2edb07147fae6c5fe3d18acad2a`)

  }

  getMovieImage(imagePath: string | null) {
    return this.http.get(`https://image.tmdb.org/t/p/w500/${imagePath}`)
  }

  getScienceFictionMovie(searchTerm: string | null = null) {
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=f94ce2edb07147fae6c5fe3d18acad2a&with_genres=878&sort_by=vote_average.desc`).pipe(map((response: any) => {
      console.log('loading in data');
      return response.results
    }));
  
  }
}

