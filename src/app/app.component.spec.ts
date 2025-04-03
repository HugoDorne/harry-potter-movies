import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async () => {
    // Mock ActivatedRoute
    const activatedRouteMock = {
      paramMap: of({
        get: (key: string) => '1', // Mock the route parameter if needed
      }),
    };

    await TestBed.configureTestingModule({
      imports: [AppComponent], // Import the standalone component
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock }, // Provide the mock ActivatedRoute
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
