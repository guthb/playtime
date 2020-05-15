import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared/index';



@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})

export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[]
  @Input() filterBy: string;
  visibleSessions: ISession[] = [];

  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy)
    }
  }


  filterSessions() {
    if (filter === 'all') {

    } else {

    }
  }



}
