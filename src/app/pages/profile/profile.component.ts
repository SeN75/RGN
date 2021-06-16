import { Component, OnInit } from '@angular/core';
import { RegistraionService } from './../../_services/registraion.service';
import { DialogService } from './../../_services/dialog.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public registrSrv: RegistraionService, public dialogSrv: DialogService) { }

  ngOnInit(): void {
  }

}
