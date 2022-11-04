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
      console.log("Close")
      this.http.post("https://blackcity/boutique_close",{}).subscribe({
        next:() => {

        },
        error:() => {

        }
      })
    }
  }





}
