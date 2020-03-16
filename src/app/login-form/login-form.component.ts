import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router'
import { FormsService } from '../services/forms.service';
import { GlobalProvider } from '../GlobalProvider/global'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  mobile:any

  errorReg: any;

  // elements  :any;

  constructor(public router: Router, private services: FormsService,private global : GlobalProvider) { }

  ngOnInit(): void { 
  }

  Login(mobile) {
    this.services.allWholesalerOrders(mobile).subscribe((res: any) => {

    // console.log(res)
     
      this.global.elements = res.message
      console.log(this.global.elements,"elements")

      if (res.code===200 || res.message==="No Orders Found") {
        
        this.errorReg = false;
        localStorage.setItem('mobile',mobile);
       
        this.router.navigate(['']);
      
        
      } else {
       
        this.errorReg = res["Result"]; 
        alert(JSON.stringify(res.result))
      }
    })
  }

  register(){
  
    this.router.navigate(['reg']);
  }


}
