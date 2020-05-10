import { Component, Input } from '@angular/core';
import { ISession } from '../shared/index';



@Component({
  selector: 'session-list',
  templateUrl: './sessions-list.component.html'
})

export class SessionListComponent {
  @Input() sessions: ISession[]
}