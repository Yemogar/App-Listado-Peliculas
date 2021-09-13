import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.page.html',
  styleUrls: ['./movies-list.page.scss'],
})
export class MoviesListPage implements OnInit {

  movies: Observable<Movie[]>;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
  }

  onSearch(event) {
    const searchInput = event.detail.value;

    if (searchInput) {
      this.movies = this.moviesService.getMoviesByTitle(searchInput);
    }
  }

  onClear(event) {
    this.movies = null;
  }

}
