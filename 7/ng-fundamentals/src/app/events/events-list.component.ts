import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';


declare let toastr

@Component({
  template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr>
    <div class="row">
     <div class="col-md-5" *ngFor="let event of events">
      <event-thumbnail [event]="event"></event-thumbnail>
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
  events: IEvent[]

  constructor(private EventService: EventService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    //this.EventService.getEvents().subscribe(events => { this.events = events })

    this.events = this.route.snapshot.data['events']

  }

}
