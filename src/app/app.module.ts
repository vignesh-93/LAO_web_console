import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DisplayFormComponent } from './display-form/display-form.component';


import{FormsModule} from '@angular/forms';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsService } from './services/forms.service';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { ProductsComponent } from './products/products.component';
import { GlobalProvider } from './GlobalProvider/global';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    DisplayFormComponent,
    RegistrationFormComponent,
    DashboardComponent,
    SidebarComponent,
    OrderdetailsComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FormsService,GlobalProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
