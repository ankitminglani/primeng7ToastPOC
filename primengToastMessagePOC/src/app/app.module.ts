import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastComponentComponent } from './toast-component/toast-component.component';
import {ToastModule} from 'primeng/toast';
import { MessageService } from "primeng/api";
@NgModule({
  declarations: [
    AppComponent,
    ToastComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    ToastModule
  ],
  providers: [MessageService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
