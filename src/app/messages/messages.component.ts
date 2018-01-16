import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: Array<{ id: number,
                    description: string,
                    days: string,
                    fromWho: string,
                    unread: string,
                    imageUrl: string }> = Array(
    { 'id': 0,
     'description': 'Hey You! It’s me again :-) I attached new (...)',
      days: '5 minutes ago',
      fromWho: 'Nina Jones',
      unread: 'unread',
      imageUrl: 'https://robohash.org/asdasdw2' },
    { 'id': 1,
     'description': 'Hey! I attached some new PSD files for (...)',
      days: 'About 20 Hours ago',
      fromWho: 'Nina Jones',
      unread: 'unread',
      imageUrl: 'https://robohash.org/asda2132s2' },
    { 'id': 2,
     'description': 'Good morning, you are fired!',
      days: '2 days ago',
      fromWho: 'James Smith',
      unread: '',
      imageUrl: 'https://robohash.org/asda23232311sdw2' },
    { 'id': 3,
      'description': 'Hello! Could You bring me coffee please?',
      days: 'about 2 weeks ago',
      fromWho: 'James Smith',
      unread: '',
      imageUrl: 'https://robohash.org/asdaasd222dw2' }
);

  constructor() { }

  ngOnInit() {
  }

}
