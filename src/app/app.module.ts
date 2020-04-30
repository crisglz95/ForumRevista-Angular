import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { HeaderComponent } from './components/Header/header.component';
import { NavbarComponent } from './components/Navbar/navbar.component';
import { RectanguloForumComponent } from './components/RectanguloForum/rectanguloforum.component';
import { TarjetasComponent } from './components/Tarjetas/tarjetas.component';
import { TarjetaRosaComponent } from './components/Tarjetas/Tarjeta-Rosa/tarjeta-rosa.component';
import { TarjetaGrisComponent } from './components/Tarjetas/Tarjeta-gris/tarjeta-gris.component';
import { TarjetaBlancaComponent } from './components/Tarjetas/Tarjeta-blanca/tarjeta-blanca.component';
import { TarjetaVerdeComponent } from './components/Tarjetas/Tarjeta-verde/tarjeta-verde.component';


@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, 
    NavbarComponent,
    RectanguloForumComponent, 
    TarjetasComponent,
    TarjetaRosaComponent,
    TarjetaGrisComponent,
    TarjetaBlancaComponent,
    TarjetaVerdeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
