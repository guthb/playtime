import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';


declare let toastr

@Component({
  template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr>
    <div class="row">
     <div class="col-md-5" *ngFor="let event of events">
      <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
    </div>
    </div>
  </div>
  `,
  styles: [`
        .pad-left { margin-left: 10px;}
        .well div {color: bbb;}
      `]
})

export class EventsListComponent implements OnInit {
  events: any

  constructor(private EventService: EventService, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.EventService.getEvents().subscribe(events => { this.events = events })
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName)
  }

}
