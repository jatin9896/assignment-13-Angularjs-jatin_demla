import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { RouterModule } from '@angular/router';
import {routes} from "./app.routes";
import {Createtaskcomponent} from "./createtask/createtask.component"
import {Showtaskcomponent} from "./showtask/showtask.component"
import {} from "./detail.service"
import {DetailService} from "./detail.service";
import {Detail} from "./detail"

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent , Createtaskcomponent , Showtaskcomponent ],
  bootstrap:    [ AppComponent ],
  providers : [ DetailService ]
})
export class AppModule { }
