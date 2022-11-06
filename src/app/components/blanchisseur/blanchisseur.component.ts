import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blanchisseur',
  templateUrl: './blanchisseur.component.html',
  styleUrls: ['./blanchisseur.component.scss']
})
export class BlanchisseurComponent implements OnInit {

  constructor() { }

  amount : number = 0

  ngOnInit(): void {
  }

  setAmount(amount:number) {
    this.amount = amount
  }

  confirmBlanchissement() {

  }

}
