import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contakt} from './contakt.model';

@Injectable({providedIn: 'root',})
export class ContaktService {
  private apiUrl = 'http://dominik-svc:8080/api/contakts';

  constructor(private http: HttpClient) {}

  getContakts(): Observable<Contakt[]> {
    return this.http.get<Contakt[]>(this.apiUrl);
  }
}
