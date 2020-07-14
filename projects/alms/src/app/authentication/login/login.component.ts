import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit  {


  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  error = false;
  success = false;


  constructor() {
      
  }

  ngOnInit(): void {

  }
 
  onSubmit() {  
    console.log(this.loginForm.value);

    if (this.loginForm.value.username == 'admin' && this.loginForm.value.password == 'admin') {
      this.success = true;
      this.error = false;
    } else {
      this.error = true;
      this.success = false;
    }
  }

 

}
