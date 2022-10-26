import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  login=(data:any)=>{
    return this.http.post("http://localhost:8080/login",data)
  }

  signup=(data:any)=>{
    return this.http.post("http://localhost:8080/adduser",data)
  }
  addrecipe=(data:any)=>{
    return this.http.post("http://localhost:8080/addpost",data)
  }

  myrecipe=(data:any)=>{
    return this.http.post("http://localhost:8080/single",data)
  }



}
