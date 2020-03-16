import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  url: any = "http://localhost:3000";

  postRegistrationUser(userData : any) {
    return this.http.post(this.url + '/toPost/registration',userData);
  }

}
