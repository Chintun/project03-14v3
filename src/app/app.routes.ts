import { Routes } from '@angular/router';
import { FontLayoutComponent } from './layouts/font-layout/font-layout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginrComponent } from './loginr/loginr.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  {
    path: '',
    component:FontLayoutComponent,
    children: [
      {path : "", component: HomeComponent},
      {path : "about", component: AboutComponent},
      {path : "login", component: LoginrComponent},
      {path : "register", component: RegisterComponent}
    ]
  }
];
