import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public OnRetailerUpdated = new EventEmitter< boolean >();

  constructor() { }

  openMenu(): void {
    this.OnRetailerUpdated.next(true);
    // window.onload = () => {
    //   document.querySelector('#menu').onclick = () => {
    //     document.querySelector('#main').classList.toggle("moved");
    //     document.querySelector('#offcanvas').classList.toggle("moved");
    //   };
    // };
  }

  ngOnInit() {
  }

}
