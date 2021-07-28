import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthserviceService } from '../authservice.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  user: any = {
    username: null,
    password: null
  }

  usernameFormControl = new FormControl('', [
    Validators.required,
    Validators.min(5),
    Validators.max(10)
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,}')
  ]);

  matcher = new MyErrorStateMatcher();


  constructor(public auth: AuthserviceService) { }


  login(loginform: NgForm) {
    if (loginform.valid) {
      this.user = loginform.value;
      this.auth.login(this.user);
    }
  }


  ngOnInit(): void {
  }

}
