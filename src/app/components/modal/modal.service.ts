import { ElementRef, Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {



  modalRef!: ElementRef;

  constructor() { }

  setModalRef(ref: ElementRef) {
    this.modalRef = ref
  }

  getModalRef() {
    return this.modalRef;
  }
}
