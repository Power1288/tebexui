import {Component, OnDestroy, OnInit} from '@angular/core';
import {TebexService} from "../../../service/tebex.service";
import {Car} from "../../../interfaces/tebex/car";
import {Subscription} from "rxjs";

@Component({
  selector: 'tebex-cars-view',
  templateUrl: './cars-view.component.html',
  styleUrls: ['./cars-view.component.scss']
})
export class CarsViewComponent implements OnInit, OnDestroy {


  carSubscribe : Subscription | undefined
  carList : Car[] = []

  constructor(public tebexService:TebexService) { }

  ngOnInit(): void {
    this.carSubscribe = this.tebexService.carList.subscribe({
      next:(cars : Car[]) => {
        this.carList = cars
      }
    })
  }

  ngOnDestroy(): void {
    this.carSubscribe?.unsubscribe()
  }

  addCar(car:Car) {
    this.tebexService.addItemToBag(car)
  }

}
