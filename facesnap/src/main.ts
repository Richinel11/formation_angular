import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(App, {
  providers: [
    provideHttpClient() // ✅ c’est la bonne méthode en Angular 20
  ]
})
.catch(err => console.error(err));
