import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) { }
  user: any;
  ngOnInit() {
  }
  Signup(user) {
    this.snackBar.open('Sign up Succesfully', 'Close', {
      duration: 3000
    });

  }
}
