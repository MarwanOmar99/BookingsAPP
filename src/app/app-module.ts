import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './share/navbar/navbar/navbar';
import { Footer } from './share/footer/footer/footer';
import { Landing } from './pages/landing/landing/landing';
import { RouterModule } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard/dashboard';
import { Booking } from './pages/booking/booking/booking';
import { Packge } from './pages/packge/packge/packge';
import { Service } from './pages/service/service/service';
import { Sidebar } from './pages/admin/sidebar/sidebar/sidebar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Admindashboard } from './pages/admin/adminDashboard/admindashboard/admindashboard';
import { Adminpackage } from './pages/admin/adminpackage/adminpackage/adminpackage';
import { Admincategories } from './pages/admin/adminCat/admincategories/admincategories';
import { Adminusers } from './pages/admin/adminuser/adminusers/adminusers';
import { Adminbookings } from './pages/admin/adminbooking/adminbookings/adminbookings';
import { Adminhotel } from './pages/admin/adminhotel/adminhotel/adminhotel';
import { HomeComponent } from './pages/home/home';

@NgModule({
  declarations: [
    App,
    Navbar,
    Footer,
    Landing,
    Dashboard,
    Booking,
    Packge,
    Service,
    Sidebar,
    Admindashboard,
    Adminpackage,
    Admincategories,
    Adminusers,
    Adminbookings,
    Adminhotel,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    RouterLinkActive,
    RouterLink,
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
