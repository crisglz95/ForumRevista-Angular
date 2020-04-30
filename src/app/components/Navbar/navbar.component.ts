import { Component } from "@angular/core";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent{
    public fecha = new Date();
    public diaNum: number = this.fecha.getDate();
    public month = this.fecha.getMonth();
    public year = this.fecha.getFullYear();
    public hour = this.fecha.getHours();
    public minutes = this.fecha.getMinutes();
}