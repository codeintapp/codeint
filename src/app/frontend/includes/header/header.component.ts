import { Component, OnInit, HostListener, Inject, ElementRef } from '@angular/core'; 
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

 

  constructor(@Inject(DOCUMENT) private document: Document, private el: ElementRef) { }



  // @HostListener('window:scroll', [])
  //  onWindowScroll(event: Event) {
  //   let element_el = document.getElementById('myHeader');
  //   if (window.pageYOffset > 110) {
  //     //element_el = document.getElementById('myHeader')?.classList.add('test');
  //     //let element = document.getElementById('myHeader');
  //     //element_el.classList.add('sticky');
  //     // console.log(element);
  //   } else {
  //    //let element = document.getElementById('myHeader');
  //    //element_el.classList.remove('sticky');
  //   }
  // }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    let element_el = this.el.nativeElement.getElementById('myHeader');
    if (window.pageYOffset > 110) {
      element_el.classList.add('test');
      //let element = document.getElementById('myHeader');
      element_el.classList.add('sticky');
      console.log(element_el);
    } else {
     //let element = document.getElementById('myHeader');
     element_el.classList.remove('sticky');
    }
  }


  
 
  

  ngOnInit(): void {
  }

  

}
