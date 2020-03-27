import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router'
import { FormsService } from '../services/forms.service';

@Component({
  selector: 'app-retailer-verification',
  templateUrl: './retailer-verification.component.html',
  styleUrls: ['./retailer-verification.component.css']
})
export class RetailerVerificationComponent implements OnInit {

mail : any;

  constructor(public router: Router, private services: FormsService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.mail = params['email'];
      console.log(this.mail,"data $$$$$$$$$$$$$$$$$"); 
      // this.emailVerify(this.mail)
  });
    this.emailVerify(this.mail)
  }

  emailVerify(email) {
    console.log(email,"email")
    this.services.verifyRetailerEmail(email).subscribe((res: any) => {
    console.log(res)
      if (res.code==200) {
          console.log("success")
          console.log(res.message)
      } else if(res.code == 400){
       console.log("err",res.result)
      }
    })
  }

}
