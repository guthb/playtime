import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from './auth.service'

@Component({
  template: `
    <h1>Edit Your Profile</h1>
    <hr>
    <div class="col-md-6">
      <h3>[Edit profile form will go here]</h3>
      <br />
      <br />
      <button type="submit" class="btn btn-primary">Save</button>
      <button type="button" class="btn btn-default">Cancel</button>
    </div>
  `,
})
export class ProfileComponent {

  profileForm: FormGroup

  constructor(private router: Router, private authService: AuthService) {

  }


  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    let firstName = new FormControl()
    let lastName = new FormControl()
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    })


  }

}
