import { Injectable } from '@angular/core';
import { IUser } from '../../model/user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:IUser;

  readonly baseURL='http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  register(user:IUser) {
    return this.http.post(this.baseURL,user).pipe(map((res:any)=> res));
    
}

 
}