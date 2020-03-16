import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChatGuard } from './nav-restrict/chat.guard';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  // {path:'',component:LoginFormComponent},
  { path: 'reg', component: RegistrationFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'sidebar', component: SidebarComponent },
  {
    path: 'orders',
    component: OrderdetailsComponent,
    // canActivate: [ChatGuard]
  },
  {
    path: 'products',
    component: ProductsComponent,
    // canActivate: [ChatGuard]
  },
  {
    path: '',
    component: DashboardComponent,
    canActivate: [ChatGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
