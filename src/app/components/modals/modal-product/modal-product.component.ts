import { Component, ElementRef, Input } from '@angular/core';


@Component({
  selector: 'app-modal-product',
  templateUrl: './modal-product.component.html',
  styleUrls: ['./modal-product.component.scss']
})
export class ModalProductComponent {

  nativeElement: HTMLElement;


  @Input() image = ''
  @Input() alt = '';
  @Input() title = '';
  @Input() description = '';
  @Input() price = '';
  @Input() store = '';
  @Input() category = '';

  constructor(element: ElementRef) {
    this.nativeElement = element.nativeElement;
  }

}
