import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard/dashboard';
import { Booking } from './pages/booking/booking/booking';
import { Packge } from './pages/packge/packge/packge';
import { Service } from './pages/service/service/service';
import { Admindashboard } from './pages/admin/adminDashboard/admindashboard/admindashboard';
import { Adminpackage } from './pages/admin/adminpackage/adminpackage/adminpackage';
import { Admincategories } from './pages/admin/adminCat/admincategories/admincategories';
import { Adminusers } from './pages/admin/adminuser/adminusers/adminusers';
import { Adminbookings } from './pages/admin/adminbooking/adminbookings/adminbookings';
import { Adminhotel } from './pages/admin/adminhotel/adminhotel/adminhotel';
import {  HomeComponent } from './pages/home/home';
import { Login } from './pages/share/login/login';
import { Register } from './pages/share/register/register';
import { FacebookReviews } from './pages/facebookreviws/facebookreviws';

const routes: Routes = [
  {path: '', component:HomeComponent},
  { path: 'home', component: HomeComponent },
  {path: 'dashboard', component: Dashboard},
  {path: 'booking' , component: Booking},
  {path: 'package' ,component:Packge},
  {path: 'service' ,component:Service},

  // Admin routes//
  {path: 'admin' , component: Admindashboard},
  {path: 'admin/packages', component:Adminpackage},
  {path: 'admin/categories',component:Admincategories},
  {path: 'admin/users',component:Adminusers},
  {path: 'admin/bookings', component:Adminbookings},
  {path: 'admin/hotels', component:Adminhotel},
  // Register and login routes
  {path: 'login' , component: Login},
  {path: 'register', component: Register},
  {path: 'reviews', component: FacebookReviews},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
