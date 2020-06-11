import { SessionListComponent } from './session-list.component'
import { ISession } from '../shared/event.model'

describe('SessionListComponent', () => {
  let component: SessionListComponent;
  let mockAuthService, mockVoterService;

  beforeEach(() => {
    component = new SessionListComponent(mockAuthService, mockVoterService);
  })

  describe('ngOnChanges', () => {
    it('should fileter the seddions correctly', () => {
      component.sessions = <ISession[]>[{ name: 'session 1', level: 'intermediate' },
      { name: 'session 2', level: 'intermediate' },
      { name: 'session 3', level: 'beginner' }]
    })
  })
})
