import { NgModule, ModuleWithProviders } from '@angular/core';
import Homecomponent = require("./home.component");
import HomeComponent = Homecomponent.HomeComponent;
import Httpservice = require("../../services/httpService");
import HttpService = Httpservice.HttpService;

@NgModule({
    imports: [],
    providers: [],
    declarations: [HomeComponent],
    
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