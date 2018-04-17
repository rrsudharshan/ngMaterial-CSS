import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  pwd: string;
  constructor(public snackBar: MatSnackBar) { }
  ngOnInit() {
  }
  Login (user) {

    this.snackBar.open('Logged Succesfully', 'Close', {
      duration: 3000
    });

  }
}


