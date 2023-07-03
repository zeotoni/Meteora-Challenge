import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  @ViewChild('modal') modalTemplateRef!: ElementRef;

  showModal(){
    this.modalTemplateRef.nativeElement.firstChild.showModal();
  }
}
