import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Company } from '../Company';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
  company = {
    name: '',
    address: '',
    phone: '',
    revenue: ''
  }

  companies: Array<Company> = []



  constructor() { }

  addCard(addform:NgForm){
    console.log('card aggiunta');
    this.companies.push(addform.value);
  }


  ngOnInit(): void {
    
  }

}
