import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  return this.http.get(this.apiurl);
}

}
