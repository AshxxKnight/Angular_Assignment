import { Component } from '@angular/core';
// import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tdp',
  templateUrl: './tdp.component.html',
  styleUrls: ['./tdp.component.css']
})
export class TDPComponent {
  // constructor(private service: ApiserviceService){
  
  // readData:any;

  constructor(private router: Router) { }

  onClick() {
      this.router.navigateByUrl('/tep');
    }
    logoff(){
      this.router.navigateByUrl('/app')
    }

  // ngOnInint():void {
    // this.service.getAllData().subscribe((res)=>{
      // console.log(res,"res==>");
      // this.readData = res.data;
// }


  }
