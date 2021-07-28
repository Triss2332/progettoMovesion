import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthserviceService {
  isAuth: boolean = false;
  user:any = {
    username: null,
    password: null
  }

  @Output() getName: EventEmitter<any> = new EventEmitter<any>()

  constructor(private router: Router) { }

  login(user:any) {
    if (user.username && user.password) {
      localStorage.setItem('token', '123456');
      this.isAuth = true;
      console.log(user);
      this.getName.emit(user.username);
      this.router.navigate(['/homepage']);
    } else {
      alert('Username o passoword errati');
    }
  }

  getEmit(){
    return this.getName;
  }

  logout() {
    localStorage.removeItem('token')
    this.isAuth = false
    this.router.navigate(['/'])
  }
 
}
