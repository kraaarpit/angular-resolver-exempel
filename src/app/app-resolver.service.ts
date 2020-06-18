import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AppResolverService implements Resolve<any> {
    url='https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  resolve(route: ActivatedRouteSnapshot, rstate:RouterStateSnapshot):     Observable<any>{
    return this.http.get<any>(this.url);
  }

}