import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';  // ✅ Import this

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideHttpClient()   // ✅ Add this so HttpClient works everywhere
  ]
});
