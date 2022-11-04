import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TebexComponent } from './components/tebex/tebex.component';
import { CarsViewComponent } from './components/tebex/cars-view/cars-view.component';
import {RouterModule} from "@angular/router";
import {ROUTES} from "./app.routes";
import { WeaponsViewComponent } from './components/tebex/weapons-view/weapons-view.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {FormsModule} from "@angular/forms";
import { NotifyComponent } from './components/tebex/notify/notify.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TebexComponent,
    CarsViewComponent,
    WeaponsViewComponent,
    NotifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    Ng2SearchPipeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
