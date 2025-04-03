import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private readonly http: HttpClient) { }

  fetchMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('http://localhost:4200/movies');
  }
}
