import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService implements InMemoryDbService {

  createDb() {
    const cars = [
      { id: 1, doors: 5, model: "Classe A", brand: 'Mercedes', typePower: 'Diesel'},
      { id: 2, doors: 3, model: "AMG", brand: 'Mercedes', typePower: 'Electric'},
      { id: 3, doors: 5, model: "Serie 1", brand: 'BMW', typePower: 'Unloaded'},
      { id: 4, doors: 3, model: "i5", brand: 'BMW', typePower: 'Electric'},
      { id: 5, doors: 3, model: "Roma", brand: 'Ferrari', typePower: 'Diesel'},
      { id: 6, doors: 3, model: "Monza", brand: 'Ferrari', typePower: 'Diesel'},
      { id: 7, doors: 3, model: "911", brand: 'Porsche', typePower: 'Diesel'},
      { id: 8, doors: 5, model: "Panamera", brand: 'Porsche', typePower: 'Diesel'},
      { id: 9, doors: 3, model: "Model X", brand: 'Tesla', typePower: 'Electric'},
      { id: 10, doors: 5, model: "Model S", brand: 'Tesla', typePower: 'Electric'},
    ]

    return { cars };
  }

}
