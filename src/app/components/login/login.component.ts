import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  pwd: string;
  constructor() { }
  ngOnInit() {
  }
  Login (user) {

    console.log(user);

  }
}


