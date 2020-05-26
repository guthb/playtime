import { Inject, Directive, OnInit, ElementRef } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';


@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
  private element: HTMLElement;

  constructor(elementRef: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.element = elementRef.nativeElement;
  }

  ngOnInit() {
    this.element.addEventListener('click', e => {
      this.$('#simple-modal').modal({})
    })

  }
}
