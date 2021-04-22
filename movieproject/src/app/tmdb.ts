export interface Tmdb {
    poster_path: string;
    imdb_id: string;
    original_title: string;
    overview: string;
    release_date: string;
    genres: [
        {
            id: number;
            name: string;
        }
    ]
    runtime: number;
    status: string;
}
