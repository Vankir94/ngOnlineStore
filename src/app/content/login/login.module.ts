import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { UserValidatorDirective } from './user-validator.directive';



@NgModule({
  declarations: [LoginComponent, UserValidatorDirective],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    RouterModule
  ],
  exports: []
})
export class LoginModule { }
