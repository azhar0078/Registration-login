import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, mapTo, tap } from 'rxjs/operators';
import { ResponseData } from '../dto/response-data';

@Injectable({
  providedIn: 'root'
})
export class LoginClientService {

  private baseUrl = "http://localhost:8080";
  private loginUrl = "/login";
  
  constructor(
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type' : 'application/json'
      }
    )
  }

  login(requestLoginDTO: any): Observable<ResponseData> {
    return this.http.post<ResponseData>(
      this.baseUrl+this.loginUrl, 
      JSON.stringify(requestLoginDTO), 
      this.httpOptions
      ).pipe(          
          retry(1),
          catchError(this.handleError)
      )
  }

  handleError(error: { status: any; error: { error: any; message: any; }; }) {
    let errorMessage = `Error Code: ${error.status} - ${error.error.error} \nMessage: ${error.error.message}`;
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}