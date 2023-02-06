import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 [x: string]: any;
 isUserLoggedin(): any {
   throw new Error('Method not implemented.');
 }

 // BASE_PATH: 'http://localhost:8080'
 EMAIL_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

 public email!: String;
 public password!: String;

 constructor(private http: HttpClient) {

 }

 authenticationService(email: string, password: string) {
   return this.http.get(`http://localhost:8080/login`,
     { headers: { authorization: this.createBasicAuthToken(email, password) } }).pipe(map((res) => {
       this.email = email;
       this.password = password;
       this.registerSuccessfulLogin(email, password);
     }));
 }

 createBasicAuthToken(email: string, password: string) {
   return 'Basic ' + window.btoa(email + ":" + password)
 }

 registerSuccessfulLogin(email: string, password:string) {
   sessionStorage.setItem(this.EMAIL_SESSION_ATTRIBUTE_NAME, email)
 }

 logout() {
   sessionStorage.removeItem(this.EMAIL_SESSION_ATTRIBUTE_NAME);
   this.email = this.email;
   this.password = this.password;
 }

 isUserLoggedIn() {
   let user = sessionStorage.getItem(this.EMAIL_SESSION_ATTRIBUTE_NAME)
   if (user === null) return false
   return true
 }

 getLoggedInUserName() {
   let user = sessionStorage.getItem(this.EMAIL_SESSION_ATTRIBUTE_NAME)
   if (user === null) return ''
   return user
 }
 registerUser(user: User): Observable<Object> {
  console.log(user);
  return this.http.post("http://localhost:8080/register",user);
}
}