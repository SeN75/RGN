import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegistraionService } from 'src/app/_services/registraion.service';

@Component({
  selector: 'app-registation',
  templateUrl: './registation.component.html',
  styleUrls: ['./registation.component.scss']
})
export class RegistationComponent implements OnInit {

  loginForm: FormGroup | any;
  userInfoForm: FormGroup | any;
  playerInfoForm: FormGroup | any;
  isNewUser: boolean = true;
  constructor(private formBuilder: FormBuilder, public registraionSrv: RegistraionService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['dev.alqarni@gmail.com'],
      password: ['123456']
    });
    this.userInfoForm = this.formBuilder.group({
      fullname: [''],
      email: [''],
      password: [''],
      re_password: [''],
      mobile: [''],
      birthday: [''],
    })
    this.playerInfoForm = this.formBuilder.group({
      username: [''],
      countryId: [''],
      cityId: [''],
      userId: ['']
    })
  }
  login() {
    if (this.loginForm.invalid) {

    } else {
      this.registraionSrv.login(this.loginForm.value)
    }
  }
  userInfo() {
    if (this.isNewUser) {
      this.registraionSrv.postUser(this.userInfoForm.value);
    } else {
      this.registraionSrv.postUser(this.userInfoForm.value);
    }
  }
  playerInfo() {
    this.playerInfoForm.get("userId").setValue(this.registraionSrv.user.id);
    if (this.isNewUser) {
      this.registraionSrv.postPlayer(this.playerInfoForm.value);
    } else {
      this.registraionSrv.postPlayer(this.playerInfoForm.value);
    }
  }
}
