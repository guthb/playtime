import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser: IUser

  constructor(private http: HttpClient) { }

  loginUser(userName: string, password: string) {

    //faking the method retun for now
    // this.currentUser = {
    //   id: 1,
    //   userName: userName,
    //   firstName: 'Frank',
    //   lastName: 'Beans'
    // }

    let loginInfo = { username: userName, password: password };
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    return this.http.post('/api/login', loginInfo, options).pipe(tap(data => {
      this.currentUser = <IUser>data['user'];
    }))
      .pipe(catchError(err => {
        return of(false)
      }))

  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName
    this.currentUser.lastName = lastName

  }

}
