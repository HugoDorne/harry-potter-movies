import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { ROUTES } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideNativeDateAdapter } from '@angular/material/core';

export const APP_CONFIG: ApplicationConfig = {
  providers: [provideRouter(ROUTES, withComponentInputBinding()), provideHttpClient(), provideNativeDateAdapter()],
};
