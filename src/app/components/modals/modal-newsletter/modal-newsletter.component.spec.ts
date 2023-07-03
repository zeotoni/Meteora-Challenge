import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewsletterComponent } from './modal-newsletter.component';

describe('ModalNewsletterComponent', () => {
  let component: ModalNewsletterComponent;
  let fixture: ComponentFixture<ModalNewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNewsletterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
