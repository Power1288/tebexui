import { Component, OnInit } from '@angular/core';
import {TebexService} from "../../service/tebex.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tebex',
  templateUrl: './tebex.component.html',
  styleUrls: ['./tebex.component.scss']
})
export class TebexComponent implements OnInit {

  constructor(public tebexService: TebexService,private router : Router) { }

  ngOnInit(): void {
    this.router.navigate([{outlets: {tebex: 'cars'}}])
  }


}
