import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/_services/helper.service';
import { RegistraionService } from 'src/app/_services/registraion.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public helperSrv: HelperService, public registrSrv: RegistraionService, public router: Router) { }
  userData: any;
  isLogin = false;
  ngOnInit(): void {
    this.isLogin = this.registrSrv.isLogin();
    if (this.isLogin) {

      this.userData = this.registrSrv.userData;
      console.log(this.userData);
    }

  }
  registration(type: string) {
    this.registrSrv.showForm = type;
    this.router.navigateByUrl('/login');
  }
}
