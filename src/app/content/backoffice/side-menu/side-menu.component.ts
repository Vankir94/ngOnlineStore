import { Component, ContentChild, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  @ViewChild('drawer', {static: true})
  public drawer!: MatDrawer;

  // @ContentChild('content', {static: true})
  // public content!: ElementRef

  @Output()
  public setsideNavControl: EventEmitter<MatDrawer> = new EventEmitter<MatDrawer>(true);

  constructor() { }

  ngOnInit(): void {
    this.setsideNavControl.emit(this.drawer);
  }

}
