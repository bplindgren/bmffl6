import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { User } from '../../user';

@Injectable({ providedIn: 'root' })
export class UserService {
  private baseURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    const url = `${this.baseURL}` + '/users';
    return this.http.get<User[]>(url).pipe(
      tap(_ => console.log('all owners fetched'))
    )
  }

  login(user:User): Observable<any> {
    const headers = new HttpHeaders(user ?{
      authorization:'Basic ' + btoa(user.username + ':' + user.password)
    }:{});

    const url = `${this.baseURL}` + '/users/login';
    return this.http.get<any>(url, {headers:headers})
    .pipe(map(response => {
      if(response){
        localStorage.setItem('currentUser', JSON.stringify(response));
      }
      return response;
    }));
  }

  logOut(): Observable<any> {
    return this.http.post(this.baseURL + '/users/logout', {})
    .pipe(map(response=> {
      localStorage.removeItem('currentUser');
    }));
  }

}
