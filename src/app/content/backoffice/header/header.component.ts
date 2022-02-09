import { Component, Input, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/store';
import { totalProducts } from 'src/app/store/reducers/cart.redusers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public someClass: string = 'myClass value';
  public condition: boolean = false;

  @Input()
  public title!: string;

  @Input()
  public drawer!: MatDrawer;

  public cartProductCount = this.store.select(totalProducts);

  constructor(
    private store: Store<IState>
  ) { }

  ngOnInit(): void {
  }

}
