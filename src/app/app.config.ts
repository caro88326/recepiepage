import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MessageService } from 'primeng/api';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(
      routes, 
      withInMemoryScrolling({scrollPositionRestoration: 'enabled'}) // so on forward routing it starts on top of the page and on backward routing it remembers the position
    ), 
    provideClientHydration(), 
    provideAnimationsAsync(), 
    MessageService
  ]

};
