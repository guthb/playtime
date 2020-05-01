import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from './auth.service'

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em {float:right; color#E05C65; padding-left:10px}
    .error imput {background-color:#E3C3C5;}
    .error ::-webkit-imput-placeholder {color: #999;}
    .error ::-moz-placeholder {color: #999;}
    .error :-moz-placeholder {color: #999;}
    .error :ms-imput-placeholder {color: #999;}
  `]

})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup

  constructor(private router: Router, private authService: AuthService) {

  }


  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    let firstName = new FormControl
      (this.authService.currentUser.firstName, Validators.required)

    let lastName = new FormControl
      (this.authService.currentUser.lastName, Validators.required)

    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    })
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
      this.router.navigate(['events'])
    }
  }

  cancel() {
    this.router.navigate(['events'])
  }

}
