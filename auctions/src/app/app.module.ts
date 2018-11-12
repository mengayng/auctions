import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { RatingModule } from 'ngx-bootstrap';
import { HomeComponent } from './home/home.component';
import { Code404Component } from './code404/code404.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';
import { ChatComponent } from './chat/chat.component';
import {LoginGuard} from './guard/login-guard';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {ProductService} from './share/product.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    FooterComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    HomeComponent,
    Code404Component,
    ProductDescComponent,
    SellerInfoComponent,
    ChatComponent,
    ProductDetailComponent,
    FilterPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    [CarouselModule.forRoot()],
    [RatingModule.forRoot()],
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
