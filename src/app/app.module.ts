import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { FormReservationComponent } from './components/form-reservation/form-reservation.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ContactComponent } from './components/contact/contact.component';
import { SliderComponent } from './components/slider/slider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    HeroComponent,
    RoomsComponent,
    FormReservationComponent,
    ReservationComponent,
    ContactComponent,
    SliderComponent,
    HomeComponent,
    LoginComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
