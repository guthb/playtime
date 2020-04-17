import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `
      <div class="well hoverwell thumbnail">
        <h2> {{event?.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <div>Time: {{event?.time}}</div>
        <div>Price: \${{ event?.price }}</div>
        <div *ngIf="event?.location">
          <span>Location: {{event?.location?.address}}</span>
          <!-- <span>&nbsp;</span> -->
          <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <!-- <button class="btn btn-primary" (click)="handleClickMe()">Click me!</button> -->
        <div *ngIf="event?.onLineUrl">
          Online URL: {{event?.onlineUrl}}
        </div>

      </div>
      `,
  styles: [`
        .thumbnail {min-height: 210px;}
        .pad-left { margin-left: 10px;}
        .well div {color: #bbb;}
      `]
})

export class EventThumbnailComponent {
  @Input() event: any
  // @Output() eventClick = new EventEmitter()

  // handleClickMe() {
  //   console.log("you clicked me")
  //   this.eventClick.emit(this.event.name)
  // }
  someProperty: any = "some value"

  logfoo() {
    console.log('log foo')
  }


}
