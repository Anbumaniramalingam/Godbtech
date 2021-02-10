import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserregComponent } from './userreg/userreg.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
 { path: 'user', component:UserregComponent },
 { path: 'welcome', component:WelcomeComponent },
 { path: 'login', component:LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
