import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private _http: HttpClient) { }

  signup(){
    return this._http.get("https://jsonplaceholder.typicode.com/users")
  }

}
