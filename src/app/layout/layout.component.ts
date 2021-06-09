import { Component, OnInit } from '@angular/core';
import { RegistraionService } from '../_services/registraion.service';
import { HelperService } from './../_services/helper.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(public logoutSrv: RegistraionService, public helperSrv: HelperService) { }

  ngOnInit(): void {
  }

}
