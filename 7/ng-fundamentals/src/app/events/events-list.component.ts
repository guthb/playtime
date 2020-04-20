import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { toBase64String } from '@angular/compiler/src/output/source_map';

declare let toastr

@Component({
  selector: 'events-list',
  template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr>
    <div class="row">
     <div class="col-md-5" *ngFor="let event of events" >
      <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
    </div>
    </div>
    <!-- <event-thumbnail (eventClick)="handleEventClicked($event)" -->
    <!-- <div class="well">
      <div>Hello World</div>
    </div> -->
     <!-- <event-thumbnail #thumbnail [event]="event1"></event-thumbnail> -->
     <!-- <h3> {{thumbnail.someProperty}}</h3>
      <button class="btn btn-primary" (click)="thumbnail.logfoo()">Log Foo</button> -->
  </div>
  `,
  styles: [`
        .pad-left { margin-left: 10px;}
        .well div {color: bbb;}
      `]
})

export class EventsListComponent implements OnInit {
  events: any[]

  constructor(private EventService: EventService) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.events = this.EventService.getEvents()
  }

  handleThumbnailClick(eventName) {
    toastr.success(eventName)
  }

}
