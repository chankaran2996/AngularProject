import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { BannerImg1Component } from './banner-img1/banner-img1.component';
// import { BannerImg2Component } from './banner-img2/banner-img2.component';
// import { BannerImg3Component } from './banner-img3/banner-img3.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBannerComponent,
    BannerImg1Component,
    // BannerImg2Component,
    // BannerImg3Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
