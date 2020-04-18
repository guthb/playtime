import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `
      <div class="well hoverwell thumbnail">
        <h2> {{event?.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <!-- <div [class.green]="event?.time === '8:00 am'" [ngSwitch]="event?.time"> -->
        <!-- <div [ngClass]="{green: event?.time === '8:00 am', bold: event?.time === '8:00 am'}" [ngSwitch]="event?.time"> -->
         <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
          Time: {{event?.time}}
          <span *ngSwitchCase="'8:00 am'">(Early Time)</span>
          <span *ngSwitchCase="'10:00 am'">(Late Time)</span>
          <span *ngSwitchDefault >(Normal Time)</span>
        </div>
        <div>Price: \${{ event?.price }}</div>
        <div *ngIf="event?.location">
        <!-- <div [hidden]="!event?.location"> -->
          <span>Location: {{event?.location?.address}}</span>
          <!-- <span>&nbsp;</span> -->
          <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <!-- <button class="btn btn-primary" (click)="handleClickMe()">Click me!</button> -->
        <div *ngIf="event?.onlineUrl">
        <!-- <div [hidden]="!event?.onlineUrl"> -->
          Online URL: {{event?.onlineUrl}}
        </div>
      </div>
      `,
  styles: [`
        .green{color: #003300 !improtant;}
        .bold { font-weight: bold;}
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
  // someProperty: any = "some value"

  // logfoo() {
  //   console.log('log foo')
  // }

  getStartTimeClass() {
    if (this.event && this.event.time === '8:00 am')
      return ['green', 'bold']
    return []
  }
}
