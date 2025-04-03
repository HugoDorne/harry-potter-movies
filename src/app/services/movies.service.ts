import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
import { MovieDetails } from '../models/movie-details.models';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private readonly http: HttpClient) { }

  fetchMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('http://localhost:4200/movies');
  }

  fetchMovieFromId(id: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`http://localhost:4200/movies/${id}`);
  }
}
