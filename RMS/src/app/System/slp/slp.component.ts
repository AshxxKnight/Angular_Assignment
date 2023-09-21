import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slp',
  templateUrl: './slp.component.html',
  styleUrls: ['./slp.component.css']
})
export class SlpComponent {
  constructor(private router:Router){}
  
  onsubmit(){
    this.router.navigateByUrl('/srp');
  }

}
