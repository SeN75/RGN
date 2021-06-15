import { Component, OnDestroy, OnInit } from '@angular/core';
import { RegistraionService } from '../_services/registraion.service';
import { HelperService } from './../_services/helper.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  constructor(public logoutSrv: RegistraionService, public helperSrv: HelperService) { }
  userData: any;
  ngOnInit(): void {
    this.helperSrv.isDashboard = true;
    this.userInfo();
  }
  ngOnDestroy() {
    this.helperSrv.isDashboard = false;
  }
  userInfo() {
    if (this.logoutSrv.userData) {
      setTimeout(() => {
        this.userData = this.logoutSrv.userData;
      }, 250)

    }
    else {
      this.logoutSrv.logout;
    }
  }
}
