import { Component, inject } from '@angular/core';
import { filter, from, interval, map, of, take, timer } from 'rxjs';
import { Auth } from '../../Auth/auth';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-operators',
  imports: [ReactiveFormsModule],
  templateUrl: './operators.html',
  styleUrl: './operators.css',
})
export class Operators {
/* //service to inject
apiservice=inject(Auth);

  values$=from([1,2,3,4,5,6,7,8,9,10])
  value1$=of([10,30,50,35,68,43])
  //filter a value using reactive forms 
   searchcontro:any=new FormControl();
   time=interval(1000)
  constructor(){
    this.time.pipe(take(4)).subscribe((data:Number)=>{
      console.log(data)
    })
    
   /*  this.values$.pipe(filter(data=>data%2===0)).subscribe(data=>{
      console.log("even numbers",data)
    })
    this.value1$.pipe(map((result)=>result.filter((data)=>data%2==0))).subscribe(value=>{
      console.log("numbers",value)
    }) 
   this.values$.pipe(filter(data=>data%2==0)).subscribe(data=>{
    console.log(data)
   }) 
  this.apiservice.getusers().subscribe(data=>{
    console.log(data)
  })
  this.apiservice.getsingleuser().subscribe(data=>{
    console.log(data)
  })
    this.searchcontro.valueChanges.subscribe((res:any)=>{
      console.log(res)
    })
  } */
}
