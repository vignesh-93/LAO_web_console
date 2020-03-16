import { Component, OnInit } from '@angular/core';
import { FormsService } from '../services/forms.service';
import swal from 'sweetalert2';

import { GlobalProvider } from '../GlobalProvider/global'
import { error } from 'protractor';

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
        swal.fire(response["message"]);
        this.getAllOrders();
      } else {
        swal.fire("Please try after sometime");
      }
    });
  }

  onSelect(order){
    // console.log(order)
    this.services.viewSpecifiedOrderDetails(order.laoOrderId).subscribe((response: any) => {
      if (response["code"] == 200) {
        // swal.fire(response);
        this.getAllOrders();
        console.log(response.message.products.name)
      }else{
        console.log("error")
      }
    });
  }

}
