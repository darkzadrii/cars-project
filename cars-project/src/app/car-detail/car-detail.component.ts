import { Component, Input, OnInit } from '@angular/core';
import { Car } from './../cars/cars-interface'
@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  constructor() { }

  @Input() car: Car;

  ngOnInit(): void {
  }

}
