import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class User {
  apiurl='https://dummyjson.com/products'
  constructor(private http:HttpClient){}
  getproducts():Observable<any>{
    return this.http.get(this.apiurl)
  }
  getproductById(id:any):Observable<any>{
      return this.http.get<any>(`${this.apiurl}/${id}`)
  }
}
