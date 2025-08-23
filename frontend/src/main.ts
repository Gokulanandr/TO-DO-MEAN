import { provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppComponent } from './app/app';
import { bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withFetch()),
    provideZoneChangeDetection(), // Zoneless mode enabled
  ],
}).catch((err: unknown) => console.error(err));
