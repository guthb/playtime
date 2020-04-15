import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  //template: `
  //   <h2>Hello World</h2>
  //   <img src="/assets/basic-shield.png"/>
  //   `
  template: `
  <nav-bar></nav-bar>
  <events-list></events-list>
  `
})
export class EventsAppComponent {
  //title = 'app';
}
