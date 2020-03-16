import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'

@Component({
  selector: 'app-display-form',
  templateUrl: './display-form.component.html',
  styleUrls: ['./display-form.component.css']
})
export class DisplayFormComponent implements OnInit {

  constructor(public router: Router) { }

  userdata = JSON.parse(localStorage.getItem('userData'));

  ngOnInit(): void {
    // var details=JSON.parse(this.userdata_name);
    // console.log((this.userdata.name))
   // console.log(JSON.parse(userdata_name.name));
  }

  onReturn(){
    this.router.navigate(['login']);
  }
}
