import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { ItemColorComponent } from './components/home/item-color/item-color.component';
import { ModalColorComponent } from './components/home/modal-color/modal-color.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemColorComponent,
    ModalColorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ModalModule.forRoot(),
  ],
  entryComponents: [
    ModalColorComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
