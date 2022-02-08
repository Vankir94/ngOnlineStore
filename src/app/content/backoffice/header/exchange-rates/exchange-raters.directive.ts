import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appExchangeRaters]'
})
export class ExchangeRatersDirective implements OnInit{

  @Input('appExchangeRatersFrom')
  public rates!: {value: number, currency: string}[];
  
  @Input('appExchangeRatersAutplay')
  public set playAuto(mode: 'off' | 'on') {}

  public content: any;

  constructor(
    private readonly tpl: TemplateRef<any>,
    private readonly vcr: ViewContainerRef
  ) { }

  public ngOnInit(): void {
      this.content = {
        $implisit: this.rates[0],
        controller: {
          next: () => this.next(),
          prev: () => this.prev()
        }
      };

      this.vcr.createEmbeddedView(this.tpl, this.content);
  }

  public next(): void {
    console.log('next');
  }

  public prev() {
    console.log('prev');
  }
}
