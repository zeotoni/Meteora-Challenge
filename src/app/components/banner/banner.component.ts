import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  slides!: any[];

  ngOnInit(): void {
    if(window.innerWidth < 768) {
      this.slides = this.slidesMobile;
    }

    if(window.innerWidth >= 768 && window.innerWidth < 1200) {
      this.slides = this.slidesTablet
    }

    if(window.innerWidth >= 1200) {
      this.slides = this.slidesDesktop
    }
  }


  slidesMobile = [
    { src: 'assets/Mobile/Banner carousel 1 _ 375.png' },
    { src: 'assets/Mobile/Banner carousel 2 _ 375.png' },
    { src: 'assets/Mobile/Banner carousel 3 _ 375.png' }
  ];

  slidesTablet = [
    { src: 'assets/Tablet/Banner carousel 1 _ 768.png' },
    { src: 'assets/Tablet/Banner carousel 2 _ 768.png' },
    { src: 'assets/Tablet/Banner carousel 3 _ 768.png' }
  ];

  slidesDesktop = [
    { src: 'assets/Desktop/Banner carousel 1 _ 1440 (1).png' },
    { src: 'assets/Desktop/Banner carousel 2 _ 1440 (1).png' },
    { src: 'assets/Desktop/Banner carousel 3 _ 1440 (1).png' }
  ];

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    if(window.innerWidth < 768) {
      this.slides = this.slidesMobile;
    }
    if(window.innerWidth >= 768 && window.innerWidth < 1200) {
      this.slides = this.slidesTablet
    }

    if(window.innerWidth >= 1200) {
      this.slides = this.slidesDesktop
    }
  }
}
