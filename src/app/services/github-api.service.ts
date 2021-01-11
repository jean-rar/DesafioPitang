import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import User from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  private readonly GITHUB_API = 'https://api.github.com';
  private readonly GITHUB_TRENDING_API = 'https://ghapi.huchen.dev';

  constructor(private http: HttpClient) { }

  public getUser(userName: string): Observable<User>{
    return this.http.get<User>(`${this.GITHUB_API}/users/${userName}`);
  }
}
