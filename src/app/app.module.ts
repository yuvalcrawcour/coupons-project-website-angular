import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/general/header/header.component';
import { FooterComponent } from './components/general/footer/footer.component';
import { MenuComponent } from './components/general/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './components/general/about/about.component';
import { Page404Component } from './components/general/page404/page404.component';
import { ThumbnailComponent } from './components/general/thumbnail/thumbnail.component';
import {HttpClientModule} from '@angular/common/http';
import { RootComponent } from './components/general/root/root.component';
import { LoginComponent } from './components/general/login/login.component';
import { AdminLayoutComponent } from './components/admin-components/admin-layout/admin-layout.component';
import { ViewCompaniesComponent } from './components/admin-components/view-companies/view-companies.component';
import { ManageCompaniesComponent } from './components/admin-components/manage-companies/manage-companies.component';
import { CompanyDetailsComponent } from './components/admin-components/company-details/company-details.component';
import { ManageCustomersComponent } from './components/admin-components/manage-customers/manage-customers.component';
import { ViewCustomersComponent } from './components/admin-components/view-customers/view-customers.component';
import { AdminCustomerDetailsComponent } from './components/admin-components/admin-customer-details/admin-customer-details.component';
import { HomeComponent } from './components/general/home/home.component';
import { CompanyLayoutComponent } from './components/company-components/company-layout/company-layout.component';
import { ManageCompanyCouponsComponent } from './components/company-components/manage-company-coupons/manage-company-coupons.component';
import { AddCouponsComponent } from './components/company-components/add-coupons/add-coupons.component';
import { DeleteUpdateCouponsComponent } from './components/company-components/delete-update-coupons/delete-update-coupons.component';
import { ViewCompanyCouponsComponent } from './components/company-components/view-company-coupons/view-company-coupons.component';
import { CustomerLayoutComponent } from './components/customer-components/customer-layout/customer-layout.component';
import { PurchaseCouponComponent } from './components/customer-components/purchase-coupon/purchase-coupon.component';
import { ViewCouponsComponent } from './components/customer-components/view-coupons/view-coupons.component';
import { CustomerDetailsComponent } from './components/customer-components/customer-details/customer-details.component';

@NgModule({
  declarations: [ HeaderComponent, FooterComponent, MenuComponent, AboutComponent, Page404Component, ThumbnailComponent, LoginComponent, RootComponent, AdminLayoutComponent, ViewCompaniesComponent, ManageCompaniesComponent, CompanyDetailsComponent, ManageCustomersComponent, ViewCustomersComponent, AdminCustomerDetailsComponent, HomeComponent, CompanyLayoutComponent, ManageCompanyCouponsComponent, AddCouponsComponent, DeleteUpdateCouponsComponent, ViewCompanyCouponsComponent, CustomerLayoutComponent, PurchaseCouponComponent, ViewCouponsComponent,CustomerDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule,HttpClientModule],
  providers: [],
  bootstrap: [RootComponent],
})
export class AppModule {}
