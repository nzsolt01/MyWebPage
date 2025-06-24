import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'https://fakestoreapi.com/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(BASE_URL);
  }

  getUser(id: number): Observable<any> {
    return this.http.get(`${BASE_URL}/${id}`);
  }

  createUser(data: any): Observable<any> {
    return this.http.post(BASE_URL, data);
  }

  updateUser(id: number, data: any): Observable<any> {
    return this.http.put(`${BASE_URL}/${id}`, data);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${BASE_URL}/${id}`);
  }
}
