import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { routing } from './app.routing';
import { HomeComponent } from './components/home.component';
import { UserService } from './Service/user.service';
import { AboutComponent } from './components/about.component';
import Leftmenucomponent = require("./left-menu/left-menu.component");
import LeftMenuComponent = Leftmenucomponent.LeftMenuComponent;

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, routing, Ng2Bs3ModalModule],
    declarations: [AppComponent, HomeComponent, AboutComponent, LeftMenuComponent ],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, UserService],
    bootstrap: [AppComponent]
})

export class AppModule { }