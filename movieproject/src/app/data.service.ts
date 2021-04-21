import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movieconfig } from './movieconfig';
import { Genre } from './search-filters/genre';
import { Keyword } from './search-filters/keyword';
import { Rating } from './search-filters/rating';

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
    {
      certification: "18",
      meaning: "Only adults are admitted. Nobody younger than 18 can rent or buy an 18-rated VHS, DVD, Blu-ray Disc, UMD or game, or watch a film in the cinema with this rating. Films under this category do not have limitation on the bad language that is used. Hard drugs are generally allowed, and explicit sex references along with detailed sexual activity are also allowed. Scenes of strong real sex may be permitted if justified by the context. Very strong, gory, and/or sadistic violence is usually permitted. Strong sexual violence is permitted unless it is eroticised or excessively graphic.",
      order: 6
    },
    {
      certification: "R18",
      meaning: "Can only be shown at licensed adult cinemas or sold at licensed sex shops, and only to adults, those aged 18 or over. Films under this category are always hard-core pornography, defined as material intended for sexual stimulation and containing clear images of real sexual activity, strong fetish material, explicit animated images, or sight of certain acts such as triple simultaneous penetration and snowballing. There remains a range of material that is often cut from the R18 rating: strong images of injury in BDSM or spanking works, urolagnia, scenes suggesting incest even if staged, references to underage sex or childhood sexual development and aggressive behaviour such as hair-pulling or spitting on a performer are not permitted. More cuts are demanded in this category than any other category.",
      order: 7
    },
    {
      certification: "RC",
      meaning: "Refused Classification. Banned from sale or hire in Australia; also generally applies to importation (if inspected by and suspicious to Customs). Private Internet viewing is unenforced and attempts to legally censor such online material has resulted in controversy. Films are rated RC if their content exceeds the guidelines. The content is very high in impact.",
      order: 8
    },
  ];

  constructor(private http: HttpClient) { }

  getGenres() {
    return this.genres;
  }

  getRatings() {
    return this.ratings;
  }

}
