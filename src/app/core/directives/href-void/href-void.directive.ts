import { Directive, ElementRef } from '@angular/core';
import * as jQuery from 'jquery';

@Directive({
  selector: '[hrefVoid]'
})

export class HrefVoidDirective {
  constructor(element: ElementRef) {
    let $element: JQuery = jQuery(element.nativeElement);
    $element.attr('href', '#');
    $element.on('click', (e: JQueryEventObject) => {
      e.preventDefault();
      e.stopPropagation();
    });
  }
}
