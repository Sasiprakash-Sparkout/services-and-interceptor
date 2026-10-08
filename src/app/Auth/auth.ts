import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  isloggedin=false;
logged(){
  this.isloggedin=true;
}  
apiurl='https://jsonplaceholder.typicode.com/users';

constructor(private http:HttpClient){

}
getusers(){
  return this.http.get(this.apiurl).pipe(map((userlist:any)=>userlist.map((data:any)=>{
  return{
    id:data.id,name:data.name
  }
  })))
}
getsingleuser(){
  return this.http.get('https://jsonplaceholder.typicode.com/users/3').pipe(map((userdata:any)=>userdata.address))
  0
}

}
