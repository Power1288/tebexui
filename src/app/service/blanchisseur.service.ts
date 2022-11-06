import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlanchisseurService {


  constructor() { }

  private _black_money : number = 0

  get black_money(): number {
    return this._black_money;
  }

  set black_money(value: number) {
    this._black_money = value;
  }
}
