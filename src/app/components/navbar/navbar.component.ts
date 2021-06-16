import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/_services/helper.service';
import { LoggerService } from 'src/app/_services/logger.service';
import { RegistraionService } from 'src/app/_services/registraion.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public helperSrv: HelperService, public registrSrv: RegistraionService, public router: Router, private logger: LoggerService) { }
  userData: any;
  isLogin = false;
  ngOnInit(): void {

    if (this.registrSrv.userData) {

      this.userData = this.registrSrv.userData;
      this.logger.log('userData', this.userData);
    }

  }
  registration(type: string) {
    this.registrSrv.showForm = type;
    this.router.navigateByUrl('/login');
  }
}
