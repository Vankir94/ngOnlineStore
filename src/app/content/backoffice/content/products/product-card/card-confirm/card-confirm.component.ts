import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { IProduct } from 'src/app/data';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-card-confirm',
  templateUrl: './card-confirm.component.html',
  styleUrls: ['./card-confirm.component.css']
})
export class CardConfirmComponent implements OnInit {

  @Input()
  public product!: IProduct;
  public save!: () => void;
  public close!: () => void;

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
    declarations: [],
    imports: [CommonModule, MatCardModule, MatButtonModule]
  })
  class CardConfirmModule {
    
  }