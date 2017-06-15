import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import Homecomponent = require("./home.component");
import HomeComponent = Homecomponent.HomeComponent;
import Httpservice = require("../../services/httpService");
import HttpService = Httpservice.HttpService;
import Gridcomponent = require("../../common/grid.component");

@NgModule({
    imports: [CommonModule],
    providers: [],
    declarations: [HomeComponent, Gridcomponent.GridComponent],
    
    exports: [HomeComponent]
})

export class HomeModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: HomeModule,
            providers: [
                HttpService
            ]
        };
    }
}