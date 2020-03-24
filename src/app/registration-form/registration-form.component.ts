import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router'
import { FormsService } from '../services/forms.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  registrationModule  : any ={}


  errorReg: any;


  constructor(public router: Router, private services: FormsService) { }

  ngOnInit(): void {
  }

  Registration(registrationModule) {


    this.services.postRegistrationUser(registrationModule).subscribe((res: any) => {
    
      if (res.code==200) {
        
        localStorage.setItem('mobile',(this.registrationModule.mobile));
      
        this.router.navigate(['']);
       
        //false
      } else {
        //truee
        //  console.log("9999999999999",res);
        this.errorReg = res["Result"];
        alert(JSON.stringify(res.result))
      }

      // },(err)=> {
      //   console.log(err)
      // }    
    })



    // this.router.navigate(['dashboard']);
  }

  reset(registrationModule){
    registrationModule = {};
  }

  onClose(){
    this.router.navigate(['login']);
  }
  
}
