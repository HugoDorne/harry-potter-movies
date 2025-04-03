import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { MoviesComponent } from './movies.component';
import { MoviesService } from '../../services/movies.service';
import { of } from 'rxjs';

describe('MoviesComponent (Standalone)', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;
  let moviesServiceSpy: jasmine.SpyObj<MoviesService>;

  beforeEach(async () => {
    // Create a spy for MoviesService
    moviesServiceSpy = jasmine.createSpyObj('MoviesService', ['fetchMovies']);
    moviesServiceSpy.fetchMovies.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      imports: [MoviesComponent], // Import the standalone component
      providers: [
        { provide: MoviesService, useValue: moviesServiceSpy }, // Provide the spy
        provideHttpClient(), // Provide HttpClient if needed
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    component.movies = [
      { id: '1', title: 'Harry Potter and the Sorcerer\'s Stone', release_date: '2001-11-16', duration: 152, budget: 125000000 },
      { id: '2', title: 'Harry Potter and the Chamber of Secrets', release_date: '2002-11-15', duration: 161, budget: 100000000 },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call fetchMovies on init', () => {
    expect(moviesServiceSpy.fetchMovies).toHaveBeenCalled();
  });

  it('should filter movies by title', () => {
    component.title.setValue('Chamber');
    component.filterMovies();
    expect(component.filteredMovies.length).toBe(1);
    expect(component.filteredMovies[0].title).toBe('Harry Potter and the Chamber of Secrets');
  });

  it('should filter movies by release year', () => {
    component.releaseYear.setValue(2001);
    component.filterMovies();
    expect(component.filteredMovies.length).toBe(1);
    expect(component.filteredMovies[0].release_date).toBe('2001-11-16');
  });

  it('should filter movies by title and release year', () => {
    component.title.setValue('Harry Potter');
    component.releaseYear.setValue(2002);
    component.filterMovies();
    expect(component.filteredMovies.length).toBe(1);
    expect(component.filteredMovies[0].title).toBe('Harry Potter and the Chamber of Secrets');
  });

  it('should not filter movies if no filters are applied', () => {
    component.filterMovies();
    expect(component.filteredMovies.length).toBe(2);
  });
});
