import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent implements OnInit {
  public title = 'Ng Cource';
  
  public drawer!: MatDrawer;
  
  public ngOnInit(): void {
  }

  public setSideNav(drawer: MatDrawer): void {
    this.drawer = drawer;
  }

}
