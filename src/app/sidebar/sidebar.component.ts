import { Component, OnInit } from '@angular/core';

import { GlobalProvider } from '../GlobalProvider/global'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  Values: any = []

  constructor(private global: GlobalProvider) { }

  ngOnInit(): void {
    this.Values = this.global.elements;
    // console.log(this.Values, "orderValues")
  }

  onLogout(){   
    localStorage.setItem('mobile',undefined);
  }

}
