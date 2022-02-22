import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private URL = environment.LINK;
  private API_KEY = environment.PUBLIC_TOKEN;
  private HASH = environment.HASH;
  private TS = environment.TS;

  constructor(private http: HttpClient) { }

  get(limite:number): Observable<any> {
    return this.http.get(`${this.URL}?apikey=${this.API_KEY}&hash=${this.HASH}&ts=${this.TS}&limit=${(limite)*10}&offset=${(limite-1)*10}`)

  }

  getXid(id:number): Observable<any> {
    return this.http.get(`${this.URL}/${id}?apikey=${this.API_KEY}&hash=${this.HASH}&ts=${this.TS}`)
  }
}
