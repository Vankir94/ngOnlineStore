import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackofficeComponent } from './backoffice.component';
import { BackofficeRoutingModule } from './backoffice-routing.module';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ExchangeRatesComponent } from './header/exchange-rates/exchange-rates.component';
import { ExchangeRatersDirective } from './header/exchange-rates/exchange-raters.directive';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BackofficeComponent,
    HeaderComponent,
    SideMenuComponent,
    ExchangeRatesComponent,
    ExchangeRatersDirective,
    
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class BackofficeModule { }
