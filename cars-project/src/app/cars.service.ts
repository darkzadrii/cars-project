import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Car } from './cars/cars-interface';

@Injectable({
  providedIn: 'root',
})
export class CarsService {

  private carsUrl = 'api/pippo';

  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this.http
      .get<Car[]>(this.carsUrl)
  }

  getCar(id: number): Observable<Car> {
    const url = `${this.carsUrl}/${id}`;
    return this.http.get<Car>(url)
  }

  ricerca(term: string): Observable<Car[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Car[]>(`${this.carsUrl}/?model=${term}`);
  }



}
