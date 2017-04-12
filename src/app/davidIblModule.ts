import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { ALL_COMPONENTS } from './components/components';
import { ALL_SERVICES } from './services/services';
import { ALL_PIPES } from './pipes/pipes';
import { routing } from './app.routes';
import { CONFIGURATION } from './configuration';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent, ...ALL_COMPONENTS, ...ALL_PIPES],
    imports: [BrowserModule, HttpModule, FormsModule, RouterModule, routing],
    providers: [
        ...ALL_SERVICES,
        { provide: APP_BASE_HREF, useValue: '/' },
    ],
}, )
export class UnicornModule {
}
