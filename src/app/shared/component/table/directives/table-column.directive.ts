import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[tableColumn]'
})
export class TableColumnDirective {
  @Input('header') header!: string;

  constructor(public templateRef: TemplateRef<any>) {}
}
