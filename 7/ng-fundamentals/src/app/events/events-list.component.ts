import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr>
    <div class="well hoverwell thumbnail">
     <h2> {{event.name}}</h2>
     <div>Date: {{event.date}}</div>
     <div>Time: {{event.time}}</div>
     <div>Price: \${{event.price}}</div>
    <div>
      <span>Location: {{event.location.address}}</span>
      <span>&nbsp;</span>
      <span>Location: {{event.location.city}}, {{event.location.country}}</span>
    </div>
    </div>
  </div>
  `
})

export class EventsListComponent {
  event = {
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

}
