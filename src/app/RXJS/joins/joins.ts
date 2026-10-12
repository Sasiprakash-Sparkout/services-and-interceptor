import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { exhaustMap, forkJoin, of, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-joins',
  imports: [ReactiveFormsModule],
  templateUrl: './joins.html',
  styleUrl: './joins.css',
})
export class Joins {
  //ForkJoin
  stateData$=of(["tn","mp","up","ap"])
  cityData$=of(["tirupur","mumbai","solapur","tirupathi"]);
  api=inject(HttpClient)
  searchcontrol:FormControl=new FormControl();
  login$=new Subject<void>();

  onbtnclick(){
    this.login$.next();
  }
  constructor(){
     
     this.login$.pipe(
    exhaustMap(() =>
      this.api.get('https://dummyjson.com/users')
    )
  ).subscribe((data: any) => {
    console.log(data);
  });

    //fork join using api
    const user=this.api.get('https://dummyjson.com/users');
    const post=this.api.get('https://dummyjson.com/posts');
    forkJoin([user,post]).subscribe(data=>{
      console.log(data)
    },error=>{
      console.log(error)
    })
   
    /* this.searchcontrol.valueChanges.subscribe((search:string)=>{this.api.get('https://dummyjson.com/products/search?='+search).subscribe((res:any)=>{
      console.log(res)
    })}) */
   this.searchcontrol.valueChanges.pipe(switchMap((seach:string)=>this.api.get('https://dummyjson.com/products/search?q='+seach))).subscribe((res:any)=>{
    console.log(res)
   })

    //fork join 
    forkJoin([this.cityData$,this.stateData$]).subscribe(data=>{
      console.log(data)
    })
  }
}
