import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopographyService {

  constructor(private http: HttpClient) { }

  getTopographyData(): Observable<any> {
    const topoDataURL = 'https://d3js.org/us-10m.v1.json';

    return this.http.get(topoDataURL);
  }
}
