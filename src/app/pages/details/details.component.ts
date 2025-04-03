import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MovieDetails } from '../../models/movie-details.models';
import { DurationPipe } from '../../pipes/duration.pipe';
import { CustomCurrencyPipe } from '../../pipes/custom-currency.pipe';

@Component({
  selector: 'app-details',
  imports: [MatCardModule, MatIconModule, DurationPipe, RouterModule, CustomCurrencyPipe],
  templateUrl: './details.component.html',
})
export class DetailsComponent implements OnInit {
  @Input({ required: true }) movieId!: string;

  movie: MovieDetails | null = null;

  constructor(private readonly moviesService: MoviesService, private readonly router: Router) {}

  ngOnInit(): void {
    this.moviesService.fetchMovieFromId(this.movieId).subscribe((movie) => {
      if (!movie) {
        this.router.navigate(['/']);
      }
      this.movie = movie;
    });
  }
}
