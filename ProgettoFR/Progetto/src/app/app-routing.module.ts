import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { OperationComponent } from './component/operation/operation.component';
import { NewoperationComponent } from './component/newoperation/newoperation.component';
import { AuthGuard } from './guard/auth.guard';



const routes: Routes = [
  {path : '' , redirectTo : 'homepage', pathMatch : 'full'},
  {path : 'login' ,component : LoginComponent },
  {path : 'register' ,component : RegisterComponent},
  {path : 'homepage' ,component : HomepageComponent , canActivate : [AuthGuard],children : [
    {path : '' , redirectTo : 'operation', pathMatch : 'full'},
    {path : 'newoperation' ,component : NewoperationComponent},
    {path : 'operation' ,component : OperationComponent},
  ]},
  {path : '**' ,redirectTo : 'login', pathMatch : 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
