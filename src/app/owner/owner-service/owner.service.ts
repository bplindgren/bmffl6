import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Owner } from '../../owner';

@Injectable({ providedIn: 'root' })
export class OwnerService {
  private baseURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAllOwners(): Observable<Owner[]> {
    const url = `${this.baseURL}` + '/owners';
    return this.http.get<Owner[]>(url).pipe(
      tap(_ => console.log('all owners fetched'))
    )
  }

  getOwner(name: String): Observable<Owner> {
    const url = `${this.baseURL}` + '/owners/' + name;
    return this.http.get<Owner>(url).pipe(
      tap(_ => console.log('fetched owner name=' + `${name}`))
    )
  }

  getAllTimeRecords(): Observable<number[]> {
    const url = `${this.baseURL}` + '/owners/getAllTimeRecords';
    return this.http.get<number[]>(url).pipe(
      tap(_ => console.log('fetched owner all time record'))
    )
  }

  // getAllTimeRecord(ownerID: number): Observable<number[]> {
  //   const url = `${this.baseURL}` + '/owners/getAllTimeRecord/' + ownerID;
  //   return this.http.get<number[]>(url).pipe(
  //     // tap(_ => console.log('fetched owner all time record'))
  //   )
  // }

}
