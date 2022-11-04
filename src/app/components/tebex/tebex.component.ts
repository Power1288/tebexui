import { Component, OnInit } from '@angular/core';
import {TebexService} from "../../service/tebex.service";
import {Router} from "@angular/router";
import {NuiServiceService} from "../../service/nui-service.service";

@Component({
  selector: 'app-tebex',
  templateUrl: './tebex.component.html',
  styleUrls: ['./tebex.component.scss']
})
export class TebexComponent implements OnInit {

  constructor(public tebexService: TebexService,private nuiService:NuiServiceService,private router : Router) { }

  ngOnInit(): void {
    this.router.navigate([{outlets: {tebex: 'cars'}}])
  }

  close() {
    this.nuiService.tebex = false
  }

  buyBag() {
    this.tebexService.buyBag()
  }


}
