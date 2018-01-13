import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: Array<{ id: number, description: string, days: string, fromWho: string }> = Array(
    { 'id': 0, 'description': 'Hey You! It’s me again :-) I attached new (...)', days: '5 days delay', fromWho: 'Nina Jones' },
    { 'id': 1, 'description': 'Hey! I attached some new PSD files for (...)', days: '2 days delay', fromWho: 'Nina Jones' },
    { 'id': 2, 'description': 'Good morning, you are fired!', days: '5 days left', fromWho: 'James Smith' },
    { 'id': 3, 'description': 'Hello! Could You bring me coffee please?', days: '2 days left', fromWho: 'James Smith' }
);

  constructor() { }

  ngOnInit() {
  }

}
