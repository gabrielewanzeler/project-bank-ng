import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { DepositComponent } from './pages/deposit/deposit.component';
import { AuthorizedGuard } from './security/authorized.guard';


const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "home", component: HomeComponent, canActivate:[AuthorizedGuard]},
  {path: "create-account", component: CreateAccountComponent},
  {path: "deposit", component: DepositComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
