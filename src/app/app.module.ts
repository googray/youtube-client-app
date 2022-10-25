import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import LayoutComponent from './layout/layout.component';
import HeaderComponentComponent from './layout/header-component/header-component.component';
import LayoutComponentComponent from './layout/layout-component/layout-component.component';
import DashboardComponent from './dashboard/dashboard.component';
import DashboardComponentComponent from './dashboard/dashboard-component/dashboard-component.component';
import ComponentsComponent from './components/components.component';
import MenuComponentComponent from './components/menu-component/menu-component.component';
import SubmenuComponentComponent from './components/submenu-component/submenu-component.component';
import AuthComponentComponent from './components/auth-component/auth-component.component';
import UnauthComponentComponent from './components/unauth-component/unauth-component.component';
import DrollsComponent from './drolls/drolls.component';
import DrollComponent from './drolls/droll/droll.component';
import DrollListComponent from './drolls/droll-list/droll-list.component';
import SharedComponent from './drolls/shared/shared.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponentComponent,
    LayoutComponentComponent,
    DashboardComponent,
    DashboardComponentComponent,
    ComponentsComponent,
    MenuComponentComponent,
    SubmenuComponentComponent,
    AuthComponentComponent,
    UnauthComponentComponent,
    DrollsComponent,
    DrollComponent,
    DrollListComponent,
    SharedComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
