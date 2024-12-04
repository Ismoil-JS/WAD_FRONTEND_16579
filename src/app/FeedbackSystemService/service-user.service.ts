import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from '../Interfaces/User';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  httpClient = inject(HttpClient);
  private apiUrl = 'https://localhost:7275/api';

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUrl}/Users`);
  }
  getUserById(id: number) {
    return this.httpClient.get<User>(`${this.apiUrl}/Users/${id}`);
  }
  deleteUser(id: number) {
    return this.httpClient.delete(`${this.apiUrl}/Users/${id}`);
  }
  updateUser(id: number, user: User) {
    return this.httpClient.put<User>(`${this.apiUrl}/Users/${id}`, user).pipe(
      catchError(() => {
        throw new Error('Failed to update user');
      })
    );
  }
  createUser(user: User) {
    return this.httpClient.post<User>(`${this.apiUrl}/Users`, user);
  }
}
