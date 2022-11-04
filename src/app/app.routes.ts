import {Routes} from "@angular/router";
import {CarsViewComponent} from "./components/tebex/cars-view/cars-view.component";
import {WeaponsViewComponent} from "./components/tebex/weapons-view/weapons-view.component";

export const ROUTES : Routes = [
  {
    path:'',
    outlet:'tebex',
    component:CarsViewComponent
  },
  {
    path:'cars',
    outlet:'tebex',
    component:CarsViewComponent
  },
  {
    path:'weapons',
    outlet:'tebex',
    component:WeaponsViewComponent

  }
]
