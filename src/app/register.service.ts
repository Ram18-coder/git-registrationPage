import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  constructor(private http:HttpClient) { }



  create(user:any)
  {
    this.http.post<object>("http://localhost:8082/postUser",user).subscribe({
      next:(value)=>
      console.log("user data succesfully entered:",value),
      error(err) {
        console.log("error occured:",err);

      },
    })
  }

  getUser()
  {
    this.http.get("http://localhost:8082/getUsers/:fname");
  }
}
