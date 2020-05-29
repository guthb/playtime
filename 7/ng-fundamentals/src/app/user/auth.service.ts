import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser: IUser

  loginUser(userName: string, password: string) {
    //faking the method retun for now
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'Frank',
      lastName: 'Beans'
    }
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName
    this.currentUser.lastName = lastName

  }

  constructor() { }
}
