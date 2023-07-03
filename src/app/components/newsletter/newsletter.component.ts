import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent {

  @ViewChild('modal') modalTemplateRef!: ElementRef;
  @ViewChild('inputEmail') inputEmail: any;

  constructor() {}

  showModal(){
    this.inputEmail.nativeElement.value = '';
    this.modalTemplateRef.nativeElement.firstChild.showModal();
  }
}
