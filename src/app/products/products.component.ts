import { Component, OnInit } from '@angular/core';
import { FormsService } from '../services/forms.service';
import { GlobalProvider } from '../GlobalProvider/global';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any = []
  productView: any = [];
  dataSource: any;

  price: any;
  p: number = 1;

  productTable: Boolean;

  constructor(public router: Router, private services: FormsService, private global: GlobalProvider) { }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    let mobile = localStorage.getItem("mobile");
    this.services.getAllWholesalerProducts(mobile).subscribe((response: any) => {
      if (response.code == 200) {
        this.productTable = true;
      this.products = response['message'];
      console.log(this.products);
      }else {
        console.log(response.message,"errrrrrrrrr")
        this.productTable = false;
        Swal.fire(response.message);
      }
    });
  }

  productDetails(product) {
    console.log(product)
    this.productView = product
    this.price = product.price
  }

  updateProductDetails(productView, price) {
    console.log(productView.price, price, "test");

    if (price == "" || price == "0") {
      //  console.log(data.price);
      // this.router.navigate(['products']);
      Swal.fire('please enter the valid price');
      // let table=data.price;       
    }
    else if (price !== "") {

      let data = {
        "sku": productView.sku,
        "price": price
      }

      this.services.updateWholesalerProducts(data).subscribe((response: any) => {
        console.log(response['code'])
        if (response['code'] == 200) {
          Swal.fire('Product updated successfully')
        } else if (response['code'] == 400) {
          Swal.fire(response['message'], 'error')
        }
        else {
          Swal.fire('Oops...', 'Something went wrong!', 'error')
        }
      });
    }
  }


}