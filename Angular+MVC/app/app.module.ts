import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import Homemodule = require("./nodes/home/home.module");
import Service = require("./services/httpService");
import Aboutcomponent = require("./nodes/about/about.component");
import Leftmenucomponent = require("./left-menu/left-menu.component");

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, routing, Homemodule.HomeModule, CommonModule],
    declarations: [AppComponent, Aboutcomponent.AboutComponent, Leftmenucomponent.LeftMenuComponent ],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, Service.HttpService],
    bootstrap: [AppComponent]
})

export class AppModule { }