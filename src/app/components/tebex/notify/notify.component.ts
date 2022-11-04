import { Component, OnInit } from '@angular/core';
import {TebexService} from "../../../service/tebex.service";

@Component({
  selector: 'tebex-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent implements OnInit {

  constructor(public tebexService : TebexService) { }

  ngOnInit(): void {

  }

}
