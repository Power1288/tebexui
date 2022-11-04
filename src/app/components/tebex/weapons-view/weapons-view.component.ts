import {Component, OnDestroy, OnInit} from '@angular/core';
import {TebexService} from "../../../service/tebex.service";
import {Weapon} from "../../../interfaces/tebex/weapon";
import {Subscription} from "rxjs";

@Component({
  selector: 'tebex-weapons-view',
  templateUrl: './weapons-view.component.html',
  styleUrls: ['./weapons-view.component.scss']
})
export class WeaponsViewComponent implements OnInit,OnDestroy {

  constructor(public tebexService:TebexService) { }

  weaponSubcribe : Subscription | undefined
  weaponList : Weapon[] = []
  ngOnInit(): void {
    this.weaponSubcribe = this.tebexService.weaponList.subscribe({
      next:(weaponList) => {
        this.weaponList = weaponList
      }
    })
  }

  ngOnDestroy(): void {
    this.weaponSubcribe?.unsubscribe()
  }

  addWeapon(weapon : Weapon) {
    this.tebexService.addItemToBag(weapon)
  }
}
