import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RegistraionService } from 'src/app/_services/registraion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;
  constructor(private formBuilder: FormBuilder, private registraionSrv: RegistraionService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['dev.alqarni@gmail.com'],
      password: ['123456']
    })
  }
  login() {
    if (this.loginForm.invalid) {

    } else {
      this.registraionSrv.login(this.loginForm.value)
    }
  }
}
