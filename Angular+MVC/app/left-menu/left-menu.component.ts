import { Component } from '@angular/core';
@Component({
    selector: 'left-menu',
    template: `
        <div id="mySidenav" class="sidenav">
            <nav>
                <a routerLink="/home" routerLinkActive="active">Home</a>
                <a routerLink="/about-us" routerLinkActive="active">About</a>
            </nav>
        </div>

        <img src="/images/right-arrow.png" id="toggleMenu" (click)="toggleNav()" />
    `,
    styleUrls: ['./app/left-menu/left-menu.component.css']
})

export class LeftMenuComponent {
    private isNavHidden = true;

    toggleNav() {
        if (this.isNavHidden) {
            this.openNav();
        }
        else {
            this.closeNav();
        }
        this.isNavHidden = !this.isNavHidden;
    }

    openNav() {
        this.setNavWidth(250);
        document.getElementById("toggleMenu").setAttribute("src", "/images/left-arrow.png");
    }

    closeNav() {
        this.setNavWidth(0);
        document.getElementById("toggleMenu").setAttribute("src", "/images/right-arrow.png");
    }

    private setNavWidth(width: number): void {
        let stringWidth = width + 'px';
        document.getElementById("mySidenav").style.width =
            document.getElementById("toggleMenu").style.marginLeft = stringWidth;
        stringWidth = (width + 10) + 'px';
        document.getElementById("main").style.marginLeft = stringWidth;
    }
}