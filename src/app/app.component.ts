import { Component } from '@angular/core';
import {NuiServiceService} from "./service/nui-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blackcityui';
  constructor(public nuiService:NuiServiceService) {
    this.nuiService.loadNui()
  }
}
