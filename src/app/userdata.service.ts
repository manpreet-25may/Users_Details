import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }
  editById(id:any){
    return this.http.get(`https://reqres.in/api/users/${id}`);
  }
// update(data:any){
//   return this.http.get(`https://reqres.in/api/users/${data.id}`,data);
// }
  }
  

