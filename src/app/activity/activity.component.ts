import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  activitys: Array<{ id: number, name: string, action: string, days: string, fromWho: string }> = Array(
    { 'id': 0, name: 'Free UI Kit', 'action': 'added a new project', days: '5 days delay', fromWho: 'Nina Jones' },
    { 'id': 1, name: 'Free PSD Template', 'action': 'commented project', days: '2 days delay', fromWho: 'James Smith' },
    { 'id': 2, name: 'Symu Website', 'action': 'completed task', days: '5 days left', fromWho: 'Alex Clooney' },
    { 'id': 3, name: 'Free PSD (...)', 'action': 'added a new project', days: '2 days left', fromWho: 'Alexandra Spears' }
);


  constructor() { }

  ngOnInit() {
  }

}
