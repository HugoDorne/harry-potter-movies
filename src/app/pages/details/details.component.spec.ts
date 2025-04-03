import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsComponent } from './details.component';
import { MoviesService } from '../../services/movies.service';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('DetailsComponent (Standalone)', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let moviesServiceSpy: jasmine.SpyObj<MoviesService>;

  beforeEach(async () => {
    moviesServiceSpy = jasmine.createSpyObj('MoviesService', ['fetchMovieFromId']);
    moviesServiceSpy.fetchMovieFromId.and.returnValue(of());

    const activatedRouteMock = {
      paramMap: of({
        get: (key: string) => '1', // Mock the movie ID as '1'
      }),
    };

    await TestBed.configureTestingModule({
      imports: [DetailsComponent],
      providers: [
        { provide: MoviesService, useValue: moviesServiceSpy },
        { provide: ActivatedRoute, useValue: activatedRouteMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call fetchMovieFromId on init', () => {
    // Assuming the component calls fetchMovieFromId on init
    expect(moviesServiceSpy.fetchMovieFromId).toHaveBeenCalled();
  });
});
