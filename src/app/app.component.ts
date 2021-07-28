import { Component } from '@angular/core';
import { AuthserviceService } from './authservice.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'progettoMovesion';

  showFiller = false;

  nameAv : ''

  constructor(public auth: AuthserviceService) {}

  ngOnInit(){
    this.auth.getEmit().subscribe((user)=> { 
      console.log(user); 
      this.nameAv = user
    }); 
  }

}
