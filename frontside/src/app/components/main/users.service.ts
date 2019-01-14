import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${this.baseUrl}/users`)
  }

  getUserByTerm(term) {
    return this.http.get(`${this.baseUrl}/users/${term}`)
  }
}
