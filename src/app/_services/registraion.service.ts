import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../_common/types';
import { environment } from './../../environments/environment';
import { Router } from '@angular/router';
const API = environment.api;
@Injectable({
  providedIn: 'root'
})
export class RegistraionService {

  constructor(private http: HttpClient, private router: Router) { }


  login(data: Login) {
    // this._login(data).subscribe((success: any) => {
    //   console.log("success: ")
    //   console.log(success)
    //   localStorage.setItem('token', success.accessToken);
    // })
    this.router.navigateByUrl('/home');
  }
  private _login(data: Login) {
    return this.http.post(API + "/api/Authorization/Login", data);
  }

  logout() {
    localStorage.removeItem('token')
    this.router.navigateByUrl('/home')
  }
}
