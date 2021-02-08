import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService implements InMemoryDbService {

  createDb() {
    const cars = [
      { numberPlate: 1, doors: 5, model: "Classe A", brand: 'Mercedes', typePower: 'Diesel'},
      { numberPlate: 2, doors: 3, model: "AMG", brand: 'Mercedes', typePower: 'Electric'},
      { numberPlate: 3, doors: 5, model: "Serie 1", brand: 'BMW', typePower: 'Unloaded'},
      { numberPlate: 4, doors: 3, model: "i5", brand: 'BMW', typePower: 'Electric'},
      { numberPlate: 5, doors: 3, model: "Roma", brand: 'Ferrari', typePower: 'Diesel'},
      { numberPlate: 6, doors: 3, model: "Monza", brand: 'Ferrari', typePower: 'Diesel'},
      { numberPlate: 7, doors: 3, model: "911", brand: 'Porsche', typePower: 'Diesel'},
      { numberPlate: 8, doors: 5, model: "Panamera", brand: 'Porsche', typePower: 'Diesel'},
      { numberPlate: 9, doors: 3, model: "Model X", brand: 'Tesla', typePower: 'Electric'},
      { numberPlate: 10, doors: 5, model: "Model S", brand: 'Tesla', typePower: 'Electric'},
    ]

    return { cars };
  }

}
