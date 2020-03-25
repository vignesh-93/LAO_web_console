import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DisplayFormComponent } from './display-form/display-form.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import{FormsModule} from '@angular/forms';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsService } from './services/forms.service';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { ProductsComponent } from './products/products.component';
import { GlobalProvider } from './GlobalProvider/global';
import { RetailerVerificationComponent } from './retailer-verification/retailer-verification.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    DisplayFormComponent,
    RegistrationFormComponent,
    DashboardComponent,
    SidebarComponent,
    OrderdetailsComponent,
    ProductsComponent,
    RetailerVerificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [FormsService,GlobalProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
