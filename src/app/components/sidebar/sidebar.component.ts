import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/_services/helper.service';
import { RegistraionService } from 'src/app/_services/registraion.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  userData: any;

  constructor(public logoutSrv: RegistraionService, public helperSrv: HelperService) { }

  ngOnInit(): void {
  }
  userInfo() {
    // console.log(this.logoutSrv.isLogin());
    if (!this.logoutSrv.userData)
      this.logoutSrv.logout();

  }
}
