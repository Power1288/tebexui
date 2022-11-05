import {Component, OnDestroy, OnInit} from '@angular/core';
import {TebexService} from "../../../service/tebex.service";
import {Weapon} from "../../../interfaces/tebex/weapon";
import {Subscription} from "rxjs";

@Component({
  selector: 'tebex-weapons-view',
  templateUrl: './weapons-view.component.html',
  styleUrls: ['./weapons-view.component.scss']
})
export class WeaponsViewComponent implements OnInit {

  constructor(public tebexService:TebexService) { }

  weaponList : Weapon[] = []
  ngOnInit(): void {
    this.weaponList = this.tebexService.weaponList
  }


  addWeapon(weapon : Weapon) {
    this.tebexService.addItemToBag(weapon)
  }
}
