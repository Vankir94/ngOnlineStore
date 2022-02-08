import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class MadalService {

  private control$ = new Subject();

  constructor() { }

  public open(data: any): void{
    this.control$.next(data);
  }

  public get modalSequence$(): Observable<any>{
    return this.control$.asObservable();
  }

  public close(): void{
    this.control$.next(null);
  }
}
