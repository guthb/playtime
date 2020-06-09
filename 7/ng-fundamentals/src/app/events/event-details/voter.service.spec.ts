import { VoterService } from './voter.service'
import { ISession } from '../shared/event.model'
import { Observable } from 'rxjs'

describe('VoterService', () => {
  let voterService: VoterService,
    mockHttp;


  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', [])
    voterService = new VoterService(mockHttp);
  });

  describe('deleteVoter', () => {

    it('should remove the voter from the list of voters', () => {
      var session = { id: 6, voters: ["ben", "sara"] };

      voterService.deleteVoter(3, <ISession>session, "joe");
    })
  })

})
