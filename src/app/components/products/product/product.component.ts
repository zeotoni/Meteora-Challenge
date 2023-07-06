import { Component, ElementRef, Input, ViewChild } from "@angular/core";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @ViewChild('modal') modalTemplateRef!: ElementRef;

  @Input() image = '';
  @Input() alt = '';
  @Input() title = '';
  @Input() description = '';
  @Input() price = '';
  @Input() store = '';
  @Input() category = '';

  showModal(){
    this.modalTemplateRef.nativeElement.firstChild.showModal();
  }
}
