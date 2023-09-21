import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SlpComponent } from './System/slp/slp.component';
import { TDPComponent } from './System/tdp/tdp.component';
import { TepComponent } from './System/tep/tep.component';
import TLPComponent from './System/tlp/tlp.component';
import { ApiserviceService } from './apiservice.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { SrpComponent } from './System/srp/srp.component';

@NgModule({
  declarations: [
    AppComponent,
    TLPComponent,
    TDPComponent,
    TepComponent,
    SlpComponent,
    SrpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
