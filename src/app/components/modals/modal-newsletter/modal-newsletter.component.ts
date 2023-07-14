import { Component, ElementRef } from '@angular/core';


@Component({
  selector: 'app-modal-newsletter',
  templateUrl: './modal-newsletter.component.html',
  styleUrls: ['./modal-newsletter.component.scss']
})
export class ModalNewsletterComponent {
  nativeElement: HTMLElement;

  constructor(element: ElementRef) {
    this.nativeElement = element.nativeElement;
  }

}
