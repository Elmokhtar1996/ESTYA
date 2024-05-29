import { Injectable } from '@angular/core';
import { Utilisateur } from './utilisateur';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  endpoint: string = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
  y : any;
  constructor(private http: HttpClient, public router: Router) {}
  // Sign-upKKK
  signUp(user: Utilisateur): Observable<any> {
    let api = `${this.endpoint}/register-user`;
    return this.http.post(api, user).pipe(catchError(this.handleError));
  }
  // Sign-in
  signIn(user: Utilisateur) {
    return this.http
      .post<any>(`${this.endpoint}/signin`, user)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token);
        localStorage.setItem('role', res.role);
        this.getUserProfile(res._id).subscribe((res) => {
          this.currentUser = res;
          
          this.y = res.msg.role;
       
            this.router.navigate(['reservation-list/']);
       
          
        });
      });
  }
  getToken() {
    return localStorage.getItem('access_token');
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['log-in']);
    }
  }
  
  test(){
  
    return this.y;
    
      }
  // User profile
  getUserProfile(id: any): Observable<any> {
    let api = `${this.endpoint}/user-profile/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }
  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
    // Get all employees
    getUsers() {
      return this.http.get(`${this.endpoint}/alluser`);
    }
    
    deleteUser(id): Observable<any> {
      let url = `${this.endpoint}/deleteuser/${id}`;
      return this.http
        .delete(url, { headers: this.headers })
        .pipe(catchError(this.handleError));
    }
    
  
}