import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { RedColorDirective } from './Directives/fontcolor.directive';
import { BlueColorDirective } from './Directives/bluecolor.directive';
import { GreenColorDirective } from './Directives/greencolor.directive';
import { FavoriteColorService } from './favorite-color.service';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    Component1Component,
    RedColorDirective,
    BlueColorDirective,
    GreenColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [FavoriteColorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
