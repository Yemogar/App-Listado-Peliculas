import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.page.html',
  styleUrls: ['./movies-detail.page.scss'],
})
export class MoviesDetailPage implements OnInit {

  public movieId: string;
  public movie$: Observable<Movie>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MoviesService
  ) { }

  ngOnInit() {
    this.movieId = this.activatedRoute.snapshot.paramMap.get('movieId');

    this.movie$ = this.movieService.getMoviesById(this.movieId);
  }

}
