import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { IUser } from '../types/model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API_URL = env.API_URL;

  constructor(
    private http: HttpClient
  ) { }


/**
 * Fetches user details from the API.
 *
 * @return {Observable<IUser>} An observable that emits the user details.
 */
 
  fetchUsersDetails(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.API_URL);
  }

}
