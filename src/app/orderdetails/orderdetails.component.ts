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

  p: number = 1;

  productNameInpopup: any;
  priceInpopup: any;
  qtyInpopup: any;
  totalPriceInpopup: any;
  retailerName: any;
  retailerOutletName: any;
  retailerShopAddress: any;
  sku: any;
  CreatedOn: any;
  orderTable: Boolean;

  constructor(private services: FormsService, private global: GlobalProvider) { }

  ngOnInit(): void {
    this.orderValues = this.global.elements;
    // console.log(this.orderValues, "orderValues")
    this.mobile = localStorage.getItem("mobile");
    this.getAllOrders();
  }

  getAllOrders() {
    this.services
      .allWholesalerOrders(this.mobile)
      .subscribe((response: any) => {
        // console.log(response,"res")
        if (response.code == 200) {
          this.orderTable = true;
          this.orderValues = response["message"];
        } else {
          // console.log(response.message)
          this.orderTable = false;
          swal.fire(response.message);
        }
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

  onSelect(order) {
    // console.log(order)
    this.services.viewSpecifiedOrderDetails(order.laoOrderId, order.products._id).subscribe((response: any) => {
      if (response["code"] == 200) {
        this.getAllOrders();

        // console.log(response.message[0])
        this.retailerName = response.message[0].retailerName,
          this.retailerOutletName = response.message[0].retailerOutletName,
          this.retailerShopAddress = response.message[0].retailerShopAddress,
          this.productNameInpopup = response.message[0].products[0].name,
          this.sku = response.message[0].products[0].sku,
          this.CreatedOn = response.message[0].products[0].CreatedOn
          this.priceInpopup = response.message[0].products[0].price,
          this.qtyInpopup = response.message[0].products[0].qty,
          this.totalPriceInpopup = response.message[0].products[0].totalPrice

      } else {
        console.log("error")
      }
    });
  }

}
