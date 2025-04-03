export interface MovieDetails {
  id: string;
  title: string;
  duration: number; // in minutes
  budget: number; // in millions
  release_date: string; // ISO date string
  box_office: number; // in billions
  cinematographers: string[];
  poster: string; // URL to the poster image
  producers: string[];
  summary: string;
}
