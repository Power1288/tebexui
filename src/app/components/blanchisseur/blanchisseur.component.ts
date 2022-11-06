import { Component, OnInit } from '@angular/core';
import {BlanchisseurService} from "../../service/blanchisseur.service";
import {HttpClient} from "@angular/common/http";
import {NuiServiceService} from "../../service/nui-service.service";

@Component({
  selector: 'app-blanchisseur',
  templateUrl: './blanchisseur.component.html',
  styleUrls: ['./blanchisseur.component.scss']
})
export class BlanchisseurComponent implements OnInit {

  constructor(public blanchiService:BlanchisseurService,private nuiService:NuiServiceService,private http:HttpClient) { }

  amount : number = 0

  ngOnInit(): void {
  }

  setAmount(amount:number) {
    this.amount = amount
  }

  confirmBlanchissement() {
    this.http.post("https://blackcity/blanchisseur_blanchi",{
      amount : this.amount
    }).subscribe({
      next:() => {

      },
      error:(err) => {
        console.log(err)
      }
    })
  }

  close() {
    this.nuiService.blanchisseur = false
    this.http.post("https://blackcity/blanchisseur_close",{}).subscribe({
      next:() => {

      },
      error:(err) => {
        console.log(err)
      }
    })
  }

}
