import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import Leftmenucomponent = require("./left-menu/left-menu.component");
import LeftMenuComponent = Leftmenucomponent.LeftMenuComponent;
import Homemodule = require("./nodes/home/home.module");
import HomeModule = Homemodule.HomeModule;
import Aboutcomponent = require("./nodes/about/about.component");
import AboutComponent = Aboutcomponent.AboutComponent;
import HttpService = require("./services/httpService");
import HttpService1 = HttpService.HttpService;

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, routing, HomeModule],
    declarations: [AppComponent, AboutComponent, LeftMenuComponent ],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, HttpService1],
    bootstrap: [AppComponent]
})

export class AppModule { }