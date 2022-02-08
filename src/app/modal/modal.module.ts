import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { MadalService } from './madal.service';



@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent
  ],
})
export class ModalModule {
  public static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: ModalModule,
      providers: [
        MadalService
      ]
    }
  }
}
