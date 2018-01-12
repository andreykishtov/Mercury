import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  private subscription;

  ngOnInit() {
      this.subscription = this.retailerService.OnRetailerUpdated
                              .subscribe(value => {
                                // Perform the appropriate action here
      });
  };

  ngOnDestroy() {
      this.subscription.unsubscribe();
  };

}
