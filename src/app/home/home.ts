import { Component, inject,OnInit } from '@angular/core';
import { Auth } from '../Auth/auth';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home   {
  logged(){
    window.alert('success')
    this.auth.logged()
  }
  auth=inject(Auth)
  
}
