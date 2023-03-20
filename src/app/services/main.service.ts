import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, from, Observable, of } from 'rxjs';
import { catchError, map, mergeMap, toArray } from 'rxjs/operators';
import { Planet } from '../shared/planet';
import { Resident } from '../shared/resident';

interface Platens {
  count: number,
  next: string,
  previous: null,
  results: Planet[]
}

@Injectable({
  providedIn: 'root'
})

export class MainService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getPlanets(): Observable<Planet[]> {
    const url = 'https://swapi.dev/api/planets'
    return this.httpClient.get<Platens>(url)
      .pipe(
        map((platens) => platens.results),
        catchError(this.handleError<Planet[]>()),
      )
  }

  getResidentInfo(url: string): Observable<Resident> {
    return this.httpClient.get<Resident>(url)
      .pipe(
        catchError(this.handleError<Resident>()),
      )
  }

  getResidentsList(residentsUrlsList: string[]): Observable<Resident[]> {
    return from(residentsUrlsList)
      .pipe(
        toArray(),
        mergeMap(residentsUrlsList => {
          const observables = residentsUrlsList.map(residentsUrl => this.getResidentInfo(residentsUrl));
          return forkJoin(observables);
        }),
        catchError(this.handleError<Resident[]>([])),
      )
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
