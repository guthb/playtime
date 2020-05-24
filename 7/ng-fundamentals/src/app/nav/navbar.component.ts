import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService } from '../events';
import { createOfflineCompileUrlResolver } from '@angular/compiler';


@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
    .nav.navbar-nav {fonr-size: 15px}
    #searchForm {margin-right: 100px;}
    @media (max-width: 1200px) {#searchForm {display: none}}
    li > a.active { color: #F97924; }
  `]
})

export class NavBarComponent {
  searchTerm: string = "";
  foundSessions: ISession[];


  constructor(private auth: AuthService, private evenService: EventService) {

  }

  searchSessions(searchTerm) {
    this.evenService.searchSessons(searchTerm).susbscribe(sessions => {
      this.foundSessions = sessions;
      console.log(this.foundSessions);
    })
  }





}
