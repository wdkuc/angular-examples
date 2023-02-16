import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        MatButtonModule,
        RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
