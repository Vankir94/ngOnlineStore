import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CustomInterceptorService {
  // implements HttpInterceptor
  
  // public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   let headers: HttpHeaders = req.headers.append('Content-Type', 'application/json')
  //   .append('Autorization', 'Bearer rrejgerogjpreijhtthuriyhriuyho6j56hj5hj67hg54h7l75')
  //   return 
  // }
  
}
