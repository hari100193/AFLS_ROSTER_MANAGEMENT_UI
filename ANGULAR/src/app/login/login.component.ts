import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide;username;password;
  constructor(private router: Router) {}

  ngOnInit() {
    this.hide = true;
  }

  login(){
    this.router.navigate(['home']);
  }

}
