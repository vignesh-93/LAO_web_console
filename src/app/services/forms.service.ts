import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(private http: HttpClient) { }

  url: any = "http://3.12.144.160";

  //For Registration-Component
  postRegistrationUser(bodyData) {
    console.log("test", bodyData)
    return this.http.post(this.url + '/savewholesaler', bodyData);
  }

  allWholesalerOrders(mobile){
    return this.http.get(this.url + '/getallorders?mobile='+mobile);
  }

  UpdateOrderStauts(data){
    console.log("test", data)
    return this.http.post(this.url + '/updateorderstatus', data); 
}

}
