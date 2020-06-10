import { VoterService } from './voter.service'
import { ISession } from '../shared/event.model'
import { Observable, of, from } from 'rxjs'

describe('VoterService', () => {
  let voterService: VoterService, mockHttp;


  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']
    )
    voterService = new VoterService(mockHttp);
  });

  describe('deleteVoter', () => {

    it('should remove the voter from the list of voters', () => {
      var session = { id: 6, voters: ['joe', 'john'] };

      mockHttp.delete.and.returnedValue(of(false));

      voterService.deleteVoter(3, <ISession>session, "joe");

      expect(session.voters.length).toBe(1);

      expect(session.voters[0]).toBe("john");
    })

    it('should call http.delete with the right URL', () => {
      var session = { id: 6, voters: ['joe', 'john'] };

      mockHttp.delete.and.returnedValue(of(false));

      voterService.deleteVoter(3, <ISession>session, "joe");

      expect(mockHttp.delete).toHaveBeenCalled(`/api/events/3/sessions/3/voters/joe`);

      //expect(session.voters[0]).toBe("john");
    })

  })

})
