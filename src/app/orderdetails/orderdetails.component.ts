import { Component, OnInit } from '@angular/core';
import { FormsService } from '../services/forms.service';

import { GlobalProvider } from '../GlobalProvider/global'

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {

  dataSource: any;
  orderValues: any = []
  errorReg: any;
  mobile: any;

  constructor(private services: FormsService, private global: GlobalProvider) { }

  ngOnInit(): void {
    this.orderValues = this.global.elements;
    console.log(this.orderValues, "orderValues")
    this.mobile = localStorage.getItem("mobile");

    this.getAllOrders();

  }

  getAllOrders() {
    this.services
      .allWholesalerOrders(this.mobile)
      .subscribe((response: any) => {
        this.orderValues = response["message"];
      });
  }


  orderStatusUpdate(product, orderStatus) {
    // console.log(orderStatus)
    let data = {
      orderid: product.laoOrderId,
      productid: product["products"]._id,
      status: orderStatus
    };

    // console.log(data.status,"data.status &&&&&&&&&&")
    //console.log(product,"data.productid ***********")

    this.services.UpdateOrderStauts(data).subscribe((response: any) => {
      if (response["code"] == 200) {
        alert(response["message"]);
        this.getAllOrders();
      } else {
        alert("Please try after sometime");
      }
    });
  }

}
