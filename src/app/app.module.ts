import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CookieService } from 'ngx-cookie-service';
import {MatDialogModule} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { ModalComponent } from './modal/modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndexComponent,
    ModalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule

  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
