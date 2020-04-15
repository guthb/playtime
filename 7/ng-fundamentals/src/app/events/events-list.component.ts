import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr>
    <!-- <event-thumbnail (eventClick)="handleEventClicked($event)" -->
     <event-thumbnail [event]="event1"></event-thumbnail>
  </div>
  `
})

export class EventsListComponent {
  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2020',
    time: '08:00 am',
    price: '2499.99',
    imageUrl: '/assets/angularconnect-shield.png',
    location: {
      address: '555 studio way',
      city: 'Hollywood',
      country: 'USA'
    }

  }

  // handleEventClicked(data) {
  //   console.log('recived:', data)
  // }

}
