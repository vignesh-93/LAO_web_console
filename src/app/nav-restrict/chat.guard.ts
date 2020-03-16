import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

// import { FormsService } from '../services/forms.service';

@Injectable({
    providedIn: 'root'
})
export class ChatGuard implements CanActivate {

    constructor(private router: Router) { }

    //To nav to Dashboard
    currentUser_login = localStorage.getItem('mobile');
   

    canActivate() {

      console.log("hai",this.currentUser_login)
        if (this.currentUser_login === 'undefined' ) {
           
            console.log("asdfgyfdsz")
            console.log("test")
            this.router.navigate(['login']);
            return false;
        }
        console.log(this.currentUser_login, "this.auth eeeeeeeeeeee")
        return true;
    }
}