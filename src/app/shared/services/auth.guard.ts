import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router
  ) {}


  canActivate(
    _: ActivatedRouteSnapshot,
    {url}: RouterStateSnapshot): Observable<boolean> {
    return of(true)
    .pipe(
      switchMap((isLogger: boolean) => {
        if (!isLogger && (url === '/login' || url === '/signup')) {
          return of(true);
        }
        if (isLogger && (url === '/login' || url === '/signup')) {
          this.router.navigate(['/backoffice']);
          return of(false);
        }
        if (!isLogger) {
          this.router.navigate(['/login']);
        }
        return of(isLogger);
      })
    )
  }
  
}
