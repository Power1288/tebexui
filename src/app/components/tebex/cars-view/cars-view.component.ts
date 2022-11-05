import {Component, OnDestroy, OnInit} from '@angular/core';
import {TebexService} from "../../../service/tebex.service";
import {Car} from "../../../interfaces/tebex/car";
import {Subscription} from "rxjs";

@Component({
  selector: 'tebex-cars-view',
  templateUrl: './cars-view.component.html',
  styleUrls: ['./cars-view.component.scss']
})
export class CarsViewComponent implements OnInit {


  carList : Car[] = []

  constructor(public tebexService:TebexService) { }

  ngOnInit(): void {
    this.carList = this.tebexService.carList
  }



  addCar(car:Car) {
    this.tebexService.addItemToBag(car)
  }

}
