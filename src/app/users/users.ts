import { Component, inject ,OnInit} from '@angular/core';

import { CommonModule } from '@angular/common';
import { User } from '../USER/user';
import { FormsModule } from '@angular/forms';
 

@Component({
  selector: 'app-users',
  imports: [CommonModule,FormsModule],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users  implements OnInit {
 auth=inject(User)
 products:any[]=[]
 productID:number=0
 items:any=null
 

ngOnInit(): void {
  this.auth.getproducts().subscribe((data) => {

    this.products = data.products;

    console.log(data);

  });



}
getproduct(){
this.auth.getproductById(this.productID).subscribe((data)=>{
      console.log('API DATA:', data);

  this.items=data
})
}
}

