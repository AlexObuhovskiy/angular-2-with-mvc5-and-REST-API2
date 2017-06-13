import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import Leftmenucomponent = require("./left-menu/left-menu.component");
import LeftMenuComponent = Leftmenucomponent.LeftMenuComponent;
import Homecomponent = require("./nodes/home/home.component");
import HomeComponent = Homecomponent.HomeComponent;
import Aboutcomponent = require("./nodes/about/about.component");
import AboutComponent = Aboutcomponent.AboutComponent;
@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, routing],
    declarations: [AppComponent, HomeComponent, AboutComponent, LeftMenuComponent ],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    bootstrap: [AppComponent]
})

export class AppModule { }