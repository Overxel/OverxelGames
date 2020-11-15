import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class IgdbService {
  queryLimit = 50;
  httpHeaders = {
    'Client-ID': environment.IGDB.ClientID,
    'Authorization': environment.IGDB.Authorization
  };

  constructor(private http: HttpClient) { }

  getSearch(search: string) {
    let query = "fields *; search " + search + "; limit " + this.queryLimit;
    return this.http.post(environment.IGDB.URL + "search", 
                          query, 
                          {
                            headers :new HttpHeaders(this.httpHeaders)
                          });
  }
}
