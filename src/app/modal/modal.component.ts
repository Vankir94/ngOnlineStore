import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, HostListener, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MadalService } from './madal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  public isOpen = false;
  public content!: any;
  public componentFactory!: ComponentFactory<any>;
  public modalRef!: ComponentRef<any>;

  @ViewChild('modalContent', { read: ViewContainerRef })
  private modalContent!: ViewContainerRef

  constructor(
    private madalService: MadalService,
    private cfr: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    this.madalService.modalSequence$.subscribe(data => {
      console.log(data);
      if (!data) {
        if (this.modalRef) {
          this.modalRef.destroy();
          this.modalRef = null;
        }
        this.isOpen = false;
        return;
      }
      if (this.modalRef) {
        return;
      }
      this.isOpen = true;

      this.componentFactory = this.cfr.resolveComponentFactory(data.component);
      this.modalRef = this.modalContent.createComponent(this.componentFactory);

      Object.keys(data.context)
        .forEach((key: string) => {
          if (this.modalRef) {
            this.modalRef.instance[key] = data.context[key];
          }
        })
    })
  }

  @HostListener('window:keyup', ['$event.keyCode'])
  public closeByKeyEsc(code: number): void {
    if (code !== 27) {
      return;
    }
    this.close();
  }

  public close(): void {
    this.madalService.close();
  }

  public save(): void {
    console.log();
  }
}
