import { MoviesService } from './../../services/movies.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { Movie } from '../../models/movie.model';
import moment from 'moment';
import { Router } from '@angular/router';
import { CustomCurrencyPipe } from '../../pipes/custom-currency.pipe';
import { DurationPipe } from '../../pipes/duration.pipe';

@Component({
  selector: 'app-movies',
  imports: [
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatButtonModule,
    CustomCurrencyPipe,
    DurationPipe,
  ],
  templateUrl: './movies.component.html',
})
export class MoviesComponent {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];

  form = new FormGroup({
    title: new FormControl(''),
    releaseYear: new FormControl<number | null>(null),
  });

  get title() {
    return this.form.get('title') as FormControl;
  }
  get releaseYear() {
    return this.form.get('releaseYear') as FormControl<number | null>;
  }

  constructor(private readonly moviesService: MoviesService, private readonly router: Router) {
    this.moviesService.fetchMovies().subscribe((movies) => {
      this.movies = movies;
      this.filteredMovies = movies;
    });

    this.form.valueChanges.subscribe(() => {
      this.filterMovies();
    });
  }

  private filterMovies() {
    this.filteredMovies = this.movies.filter((movie) => {
      return (
        (this.title.value ? movie.title.toLowerCase().includes(this.title.value.toLowerCase()) : true) &&
        (this.releaseYear.value ? moment(movie.release_date).year() === this.releaseYear.value : true)
      );
    });
  }

  goToDetails(id: string) {
    this.router.navigate(['details', id]);
  }
}
