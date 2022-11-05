import { Injectable } from '@angular/core';
import {Weapon} from "../interfaces/tebex/weapon";
import {Observable, of} from "rxjs";
import {Notify} from "../interfaces/tebex/notify";
import {Car} from "../interfaces/tebex/car";
import {HttpClient} from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})


export class TebexService {


  constructor(private http:HttpClient) { }

  searchFilter : string = ""

  private _messageNotify : Notify | undefined

  private _bag : any = []

  private _coin : number = 0

  private _userWeapons : any = []

  private _userName : string = ""

  private _weaponList : Weapon[] = []

  private _carList : Car[] = []

  public get carList() : Car[] {
    return this._carList
  }

  public set carList(cars) {
    this._carList = cars
  }

  public get coin() : number {
    return this._coin
  }


  public set coin(coin : number) {
    this._coin = coin
  }

  public get userName() {
    return this._userName
  }

  public set userName(name :string) {
    this._userName = name
  }

  public get userWeapons() {
    return this._userWeapons
  }

  public set userWeapons(userWeapons) {
    this._userWeapons = userWeapons
  }



  public get weaponList() : Weapon[] {
    return this._weaponList
  }

  public set weaponList(weapons) {
    this._weaponList = weapons
  }


  get messageNotify(): Notify | undefined {
    return this._messageNotify;
  }

  set messageNotify(value: Notify | undefined) {
    if (this.messageNotify== undefined) {
      this._messageNotify = value;
      setTimeout(() => {
        this._messageNotify = undefined
      },this._messageNotify?.time ? this._messageNotify.time : 2000)
    }

  }

  public get getBag() : Weapon[] {
    return this._bag
  }

  public set setBag(bag : any) {
    this._bag = bag
  }

  public addItemToBag(item: Weapon | Car) : any {
    var total : number = 0
    this.getBag.forEach((it : Weapon | Car) => {
      total += it.price
    })

    if (this.coin - (total + item.price)  < 0) {
      return this.messageNotify = {type:'error',message:"Vous n'avez plus assez de fond",time:2000}
    }

    const userHas = this.userWeapons.find((it:any) => it.model.toLowerCase() == item.model)
    const itemSearch = this.getBag.find(it => it.model == item.model)

    if (userHas) {
       this.messageNotify = {type:'error',message:"Vous posséder deja cette armes",time:2000}
    }

    if (!itemSearch && !userHas) {
      this._bag.push(item)
    }else {
      this.messageNotify = {type:'error',message:"Vous ne pouvez prendre qu'un seul item du meme type",time:2000}
    }
  }



  public getTotal() : number {
    var total : number = 0
    this.getBag.forEach(item  => {
      total += item.price
    })

    return parseInt(total.toFixed(2))
  }

  public removeFromBag(item : Weapon) {
    this.setBag = this.getBag.filter(it => it.model != item.model)
  }

  public buyBag() {
    this.http.post("https://blackcity/boutique_buy",{
      bag:this.getBag
    }).subscribe({
      next:(data:any) => {
        var total = 0
        this.messageNotify = {type:"success",message:"Vous avez recu vos achat",time:3000}
        this.getBag.forEach(item => {
          total += item.price
        })
        this.coin -= total
        this.setBag = []
        if (data.length) this.userWeapons = data
      },
      error:(err) => {
        console.log(err)
      }
    })
  }



}
