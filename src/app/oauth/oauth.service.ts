import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OauthService {

  constructor(private http: HttpClient) { }

  getUserProfileInfo(access_token): Observable<any> {
    const url = 'https://www.googleapis.com/oauth2/v1/userinfo';
    let params = new HttpParams();
    params = params.append('access_token', access_token);
    return this.http.get(url, { params });
  }
}
