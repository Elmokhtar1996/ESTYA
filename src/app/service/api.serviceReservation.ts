import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  subscribe(arg0: (response: any) => void) {
    throw new Error('Method not implemented.');
  }
  baseUri: string = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  // Create
  createReservation(data): Observable<any> {
    let url = `${this.baseUri}/create_reservation`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }

  // Get all reservation
  getReservations() {
    return this.http.get(`${this.baseUri}/all_reservation`);
  }


  // Get reservation
  getReservation(id): Observable<any> {
    let url = `${this.baseUri}/one_reservation/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }
   // User profile
   getUserProfile(id: any): Observable<any> {
    let api = `${this.baseUri}/user-profile/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
        
      }),
      catchError(this.errorMgmt)
    );
  }

  // Update reservation
  updateReservation(id, data): Observable<any> {
    let url = `${this.baseUri}/update_reservation/${id}`;
    return this.http
      .put(url, data, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }


  // Delete reservation
  deleteReservation(id): Observable<any> {
    let url = `${this.baseUri}/delete_reservation/${id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }
    // Get all uSER
    getUser() {
      return this.http.get(`${this.baseUri}/all_user`);
    }
    getSalle() {
      return this.http.get(`${this.baseUri}/all_salle`);
    }
    

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
