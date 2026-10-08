import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { forkJoin, of, switchMap } from 'rxjs';

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
  search:FormControl=new FormControl();
  constructor(){
    //fork join using api
    const user=this.api.get('https://dummyjson.com/users');
    const post=this.api.get('https://dummyjson.com/posts');
    forkJoin([user,post]).subscribe(data=>{
      debugger;
    },error=>{
      console.log(error)
    }
    //switch map
    
    )
    this.search.valueChanges.pipe(switchMap(sea:String)=>this.api.get(''))

    //fork join 
    forkJoin([this.cityData$,this.stateData$]).subscribe(data=>{
      console.log(data)
    })
  }
}
