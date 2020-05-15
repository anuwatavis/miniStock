import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { LoginRegisterLayoutComponent } from './layouts/login-register-layout/login-register-layout.component';
import { DashboardComponent } from './pages/backend/dashboard/dashboard.component';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
import { HomeComponent } from './pages/frontend/home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontendLayoutComponent } from './layouts/frontend-layout/frontend-layout.component';
const routes: Routes = [
  //Route for call fontendLayout Page
  {
    path: '',
    component: FrontendLayoutComponent,
    children: [{ path: '', component: HomeComponent, pathMatch: 'full' }],
  },
  //Route for call baclEndLayout Page
  {
    path: 'backend',
    component: BackendLayoutComponent,
    children: [{ path: '', component: DashboardComponent }],
  },
  //Route for call LoginAndRegister Page
  {
    path: 'login',
    component: LoginRegisterLayoutComponent,
    children: [{ path: '', component: LoginRegisterComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
