import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontendLayoutComponent } from './layouts/frontend-layout/frontend-layout.component';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
import { LoginRegisterLayoutComponent } from './layouts/login-register-layout/login-register-layout.component';
import { HomeComponent } from './pages/frontend/home/home.component';
import { AboutComponent } from './pages/frontend/about/about.component';
import { ContactComponent } from './pages/frontend/contact/contact.component';
import { DashboardComponent } from './pages/backend/dashboard/dashboard.component';
import { StockComponent } from './pages/backend/stock/stock.component';
import { ReportComponent } from './pages/backend/report/report.component';
import { UsersComponent } from './pages/backend/users/users.component';
import { SettingComponent } from './pages/backend/setting/setting.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { SidebarComponent } from './shared/backend/sidebar/sidebar.component';
import { FooterFrontComponent } from './shared/frontend/footer-front/footer-front.component';
import { HeaderFrontComponent } from './shared/frontend/header-front/header-front.component';
import { HeaderBackendComponent } from './shared/backend/header-backend/header-backend.component';
import { FooterBackendComponent } from './shared/backend/footer-backend/footer-backend.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontendLayoutComponent,
    BackendLayoutComponent,
    LoginRegisterLayoutComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    DashboardComponent,
    StockComponent,
    ReportComponent,
    UsersComponent,
    SettingComponent,
    LoginRegisterComponent,
    SidebarComponent,
    FooterFrontComponent,
    HeaderFrontComponent,
    HeaderBackendComponent,
    FooterBackendComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
