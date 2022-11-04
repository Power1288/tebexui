import { Injectable } from '@angular/core';
import {Weapon} from "../interfaces/tebex/weapon";
import {Observable, of} from "rxjs";
import {Notify} from "../interfaces/tebex/notify";
import {Car} from "../interfaces/tebex/car";



@Injectable({
  providedIn: 'root'
})


export class TebexService {


  constructor() { }

  searchFilter : string = ""

  private _messageNotify : Notify | undefined

  private _bag : any = []

  private _weaponList : Weapon[] = [
    {name:'Pistolet',model:'weapon_pistol',price:100,image:'./assets/tebex/weapons/weapon_pistol.png',type:"weapon"},
    {name:'Pistolet 50',model:'weapon_pistol50',price:150,image:'./assets/tebex/weapons/weapon_pistol50.png',type:"weapon"},
    {name:'Couteau',model:'weapon_knive',price:50,image:'./assets/tebex/weapons/weapon_knive.png',type:"weapon"},
    {name:'smg',model:'weapon_smg',price:50,image:'./assets/tebex/weapons/weapon_smg.png',type:"weapon"},
    {name:'tazer',model:'weapon_stungun_mp',price:50,image:'./assets/tebex/weapons/weapon_stungun_mp.png',type:"weapon"},
    {name:'revolver',model:'weapon_revolver',price:50,image:'./assets/tebex/weapons/weapon_revolver.png',type:"weapon"},
  ]

  private _carList : Car[] = [
    {name:'Bmw M8',model:'m8',price:100,image:'./assets/tebex/cars/bmwm8.png',type:"car"},
    {name:'Ferrari SF90',model:'SF90',price:150,image:'./assets/tebex/cars/FerrariSF90.png',type:"car"},
    {name:'Mercedes AMG GT63',model:'GT63',price:50,image:'./assets/tebex/cars/MercedesAMGGT63.png',type:"car"},
  ]

  public get carList() : Observable<Car[]> {
    return of(this._carList);
  }



  public get weaponList() : Observable<Weapon[]> {
    return of(this._weaponList)
  }


  get messageNotify(): Notify | undefined {
    return this._messageNotify;
  }

  set messageNotify(value: Notify | undefined) {
    if (this.messageNotify== undefined) {
      this._messageNotify = value;
      setTimeout(() => {
        console.log("remise a 0")
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

  public addItemToBag(item: Weapon | Car) : void {
    const itemSearch = this.getBag.find(it => it.model == item.model)
    if (!itemSearch) {
     return this._bag.push(item)
    }
    this.messageNotify = {type:'error',message:"Vous ne pouvez prendre qu'un seul item du meme type",time:2000}
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



}
