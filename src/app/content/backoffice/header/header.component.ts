import { Component, Input, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

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

  constructor() { }

  ngOnInit(): void {
  }

}
