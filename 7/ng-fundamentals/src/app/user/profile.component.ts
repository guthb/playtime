import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from './auth.service'

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup

  constructor(private router: Router, private authService: AuthService) {

  }


  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    let firstName = new FormControl
      (this.authService.currentUser.firstName)

    let lastName = new FormControl
      (this.authService.currentUser.lastName)

    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    })
  }

  saveProfile(formValues) {
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
    this.router.navigate(['events'])
  }

  cancel() {
    this.router.navigate(['events'])
  }

}
