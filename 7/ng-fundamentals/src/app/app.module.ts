import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouterActivator,
  EventsListResolver,
  CreateSessionComponent,
  SessionListComponent
} from './events/index'

import { EventsAppComponent } from './events-app.component';
//import { EventsListComponent } from './events/events-list.component';
//import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { NavBarComponent } from './nav/navbar.component';
//import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { CollapsbileWellComponent } from './common/collapsible-well.component';
//import { EventDetailsComponent } from './events/event-details/event-details.component';
import { appRoutes } from './routes';
//import { CreateEventComponent } from './events/create-event.components';
import { Error404Component } from './errors/404.components';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { EventRouterActivator } from './events/event-details/event-route-activator.service';
//import { EventsListResolver } from './events/events-list-resolver.service';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsbileWellComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouterActivator,
    EventsListResolver,
    AuthService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    window.confirm('you have not saved this event, do you really want to cancel?')
  return true
}
