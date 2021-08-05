import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdCarouselBasic } from './Carousel/carousel-basic.component';
import { BodyComponent } from './Body/app-bory.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, NgbdCarouselBasic, BodyComponent],
  imports: [BrowserModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
