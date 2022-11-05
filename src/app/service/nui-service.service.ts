import { Injectable } from '@angular/core';
import {TebexService} from "./tebex.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NuiServiceService {

  private _tebex : boolean = false
  constructor(private tebexService:TebexService,private http:HttpClient) {
    this.loadNui()
  }

  loadNui() {
    window.addEventListener("message",(event:MessageEvent) => {
      const data = event.data

      switch (data.ui) {
        case "tebex":
          this.tebexService.coin = data.coin
          this.tebexService.userWeapons = data.weaponsUser
          this.tebexService.userName = data.userName
          this.tebexService.carList = []
          this.tebexService.weaponList = []
          data.itemShop.forEach((item:any) => {
            if (item.type == "car") {
              item.image = `./assets/tebex/cars/${item.model}.png`
              this.tebexService.carList.push(item)
            }else if (item.type == "weapon") {
              item.image = `./assets/tebex/weapons/${item.model}.png`
              this.tebexService.weaponList.push(item)
            }
          })
          this.tebex = true
          break;
        default:
          break
      }
    })
  }

  get tebex(): boolean {
    return this._tebex;
  }

  set tebex(value: boolean) {
    this._tebex = value;
    if (!value) {
      this.http.post("https://blackcity/boutique_close",{}).subscribe({
        next:() => {

        },
        error:() => {

        }
      })
    }
  }





}
