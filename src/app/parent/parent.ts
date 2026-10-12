import { Component } from '@angular/core';
import { Child } from './child/child';
import { emp } from '../services/User.module';



@Component({
  selector: 'app-parent',
  standalone:true,
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  productname="iPhone";
  productprice=50000;
  cardCount=0;
  onsubmit(em:any){
    this.cardCount=em;
  }
}
