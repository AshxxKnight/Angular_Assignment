import { Component } from '@angular/core';
import { Router } from '@angular/router';

  @Component({
    selector: 'app-tlp',
    templateUrl: './tlp.component.html',
    styleUrls: ['./tlp.component.css']
  })




  export default class TLPComponent {

    constructor(private router: Router) { }

    onClick() {
      this.router.navigateByUrl('/tdp');
    }
  };

