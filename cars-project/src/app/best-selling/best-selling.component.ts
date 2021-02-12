import { Component, OnInit } from '@angular/core';
import { Car } from './../cars/cars-interface';
import { CarsService } from './../cars.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'
@Component({
  selector: 'app-best-selling',
  templateUrl: './best-selling.component.html',
  styleUrls: ['./best-selling.component.css']
})
export class BestSellingComponent implements OnInit {

  //predisposizione array contenitore
  listaAuto: Car[] = [];

  //risultato in string chiusura
  closeResult: string;

  //spinner
  hideSpinner: boolean = true

  //importiamo la possibilità di chiamare eroi tramite CarsService, facendo una injection dependencies
  constructor(private callMyCars: CarsService, private modalService:  NgbModal) { }

  ngOnInit(){
      this.getCars()
  }

  //retrieve my 4 cars decided by splice
  getCars(): void {
    this.callMyCars.getCars().subscribe((list) => {
      this.listaAuto = list.slice(0, 4)
    });
  }

  //logic behind modal open and close
  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
