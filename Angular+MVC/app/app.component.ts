import { Component } from "@angular/core"
@Component({
    selector: "user-app",
    template: `
        <div class="content">
            <div class="left-menu">
                <left-menu></left-menu>
            </div>
            <div class="main" id="main" style="transition: margin-left .5s; padding: 20px; margin: -40px 0 0 10px">
                <router-outlet></router-outlet>
            </div>
        </div>
`
})

export class AppComponent {

}