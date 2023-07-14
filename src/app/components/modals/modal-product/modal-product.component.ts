import { Component, ElementRef, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-modal-product',
  templateUrl: './modal-product.component.html',
  styleUrls: ['./modal-product.component.scss']
})
export class ModalProductComponent implements OnInit{

  nativeElement: HTMLElement;

  isVisible: boolean = true;

  listSizes!: string [];
  sizeShoes: string[] = ['36', '37', '38', '39', '40'];
  sizeClothes: string[] = ['P', 'PP', 'M', 'G', 'GG'];

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

  ngOnInit(): void {

    if(this.category === 'calçados'){
      this.listSizes = this.sizeShoes;
    } else {
      this.listSizes = this.sizeClothes;
    }

    if(this.category === 'óculos' || this.category === 'bolsas') {
      this.isVisible = !this.isVisible;
    }
  }
}
