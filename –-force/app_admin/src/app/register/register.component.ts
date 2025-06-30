import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  public formError: string = '';
  //submitted = false;

  public newUser: User = {
   name: '',
   email: '',
   password: ''
  };

  constructor(
   private router: Router,
   private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  public onRegisterSubmit(): void {
    this.formError = '';
    if (!this.newUser.name || !this.newUser.email || !this.newUser.password) {
      this.formError = 'All fields are required, please try again';
      //this.router.navigateByUrl('#'); // Return to login page
    } else {
        this.doRegister();
      }
  }

  private doRegister(): void {
    this.authenticationService.register(this.newUser)
    .then(() => this.router.navigateByUrl('list-trips'))
    .catch((message: string) => this.formError = message);
    }
}