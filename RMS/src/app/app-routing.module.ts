import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlpComponent } from './System/slp/slp.component';
import { SrpComponent } from './System/srp/srp.component';
import { TDPComponent } from './System/tdp/tdp.component';
import { TepComponent } from './System/tep/tep.component';
import TLPComponent from './System/tlp/tlp.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'tdp',component:TDPComponent},
  {path:'tep',component:TepComponent},
  {path:'tlp',component:TLPComponent},
  {path:'slp',component:SlpComponent},
  {path:'app',component:AppComponent},
  {path:'srp',component:SrpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
