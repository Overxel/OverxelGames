import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './components/shared/nav/nav.component';
import { TopNavComponent } from './components/shared/top-nav/top-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgbModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
