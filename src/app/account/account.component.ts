import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  phoneNumber: string = '';
  email: string = '';

  constructor() {}

  ngOnInit() {}

  onSave() {
    // Save account information
    console.log('Saving account information');
  }
}