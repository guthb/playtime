import { Routes } from '@angular/router'

import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventsListResolver,
  CreateSessionComponent,
  EventResolver
} from './events/index'



//import { EventsListComponent } from './events/events-list.component'
//import { EventDetailsComponent } from './events/event-details/event-details.component'
//import { CreateEventComponent } from './events/create-event.components'
import { Error404Component } from './errors/404.components'
//import { EventRouterActivator } from './events/event-details/event-route-activator.service'
//import { EventsListResolver } from './events/events-list-resolver.service'


export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolver } },
  { path: 'events/:id', component: EventDetailsComponent, resolve: [EventResolver] },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: './user/user.module#UserModule' }

]
