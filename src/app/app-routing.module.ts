import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/general/about/about.component';
import { AddCouponsComponent } from './components/company-components/add-coupons/add-coupons.component';
import { AdminLayoutComponent } from './components/admin-components/admin-layout/admin-layout.component';
import { CompanyDetailsComponent } from './components/admin-components/company-details/company-details.component';
import { CompanyLayoutComponent } from './components/company-components/company-layout/company-layout.component';
import { AdminCustomerDetailsComponent} from './components/admin-components/admin-customer-details/admin-customer-details.component';
import { DeleteUpdateCouponsComponent } from './components/company-components/delete-update-coupons/delete-update-coupons.component';
import { HomeComponent } from './components/general/home/home.component';
import { LoginComponent } from './components/general/login/login.component';
import { ManageCompaniesComponent } from './components/admin-components/manage-companies/manage-companies.component';
import { ManageCompanyCouponsComponent } from './components/company-components/manage-company-coupons/manage-company-coupons.component';
import { ManageCustomersComponent } from './components/admin-components/manage-customers/manage-customers.component';
import { Page404Component } from './components/general/page404/page404.component';
import { ViewCompaniesComponent } from './components/admin-components/view-companies/view-companies.component';
import { ViewCustomersComponent } from './components/admin-components/view-customers/view-customers.component';
import { ViewCompanyCouponsComponent } from './components/company-components/view-company-coupons/view-company-coupons.component';
import { CustomerLayoutComponent } from './components/customer-components/customer-layout/customer-layout.component';
import { PurchaseCouponComponent } from './components/customer-components/purchase-coupon/purchase-coupon.component';
import { CustomerDetailsComponent } from './components/customer-components/customer-details/customer-details.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'welcome-customer', component: CustomerLayoutComponent, children: [
      { path: 'purchase-coupon', component: PurchaseCouponComponent },
      { path: 'customer-details', component: CustomerDetailsComponent }
    ]
  },
  {
    path: 'welcome-company', component: CompanyLayoutComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'add-coupons', component: AddCouponsComponent },
      { path: 'delete-update-coupons', component: DeleteUpdateCouponsComponent },
      { path: 'view-company-coupons', component: ViewCompanyCouponsComponent }]
  },

  {
    path: 'welcome-admin', component: AdminLayoutComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'view-companies', component: ViewCompaniesComponent },
      { path: 'manage-companies', component: ManageCompaniesComponent },
      { path: 'companyDetails/:id', component: CompanyDetailsComponent },
      { path: 'view-customers', component: ViewCustomersComponent },
      { path: 'manage-customers', component: ManageCustomersComponent },
      { path: 'adminCustomerDetails/:id', component: AdminCustomerDetailsComponent}
    ]
  },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: Page404Component }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
