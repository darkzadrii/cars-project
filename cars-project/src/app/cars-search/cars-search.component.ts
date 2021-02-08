import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Car } from '../cars/cars-interface';
import { CarsService } from './../cars.service'
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-cars-search',
  templateUrl: './cars-search.component.html',
  styleUrls: ['./cars-search.component.css']
})
export class CarsSearchComponent implements OnInit {

  listaAuto: Observable<Car[]>
  private searchTerms = new Subject<string>();

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    this.listaAuto = this.searchTerms.pipe(
      switchMap((term: string) => this.carsService.ricerca(term)),
    );
  }

  search(term: string): void {
    this.searchTerms.next(term)
  }


}
