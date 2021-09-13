import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { Movie } from '../models/movie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiUrl = 'https://www.omdbapi.com/?apiKey=' + environment.apiKey;

  constructor(private httpClient: HttpClient) { }

  getMoviesByTitle(title: string): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.apiUrl + `&s=${title}`).pipe(pluck('Search'));
  }

  getMoviesById(id: string): Observable<Movie> {
    return this.httpClient.get<Movie>(this.apiUrl + `&i=${id}`);
  }
}
