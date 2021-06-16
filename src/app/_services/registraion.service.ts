import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, Player } from '../_common/types';
import { environment } from './../../environments/environment';
import { Router } from '@angular/router';
import { User } from './../_common/types';
import { LoggerService } from './logger.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastService } from './toast.service';
const API = environment.api;
@Injectable({
  providedIn: 'root'
})
export class RegistraionService {

  userData: any;
  playerData: any;
  user: any;
  player: any;
  showForm = 'login';

  constructor(private http: HttpClient, private router: Router, private logger: LoggerService, private translateSrv: TranslateService, private toastSrv: ToastService) {
    this.isLogin();
  }

  login(data: Login) {
    this._login(data).subscribe((success: any) => {
      this.userData = success;
      // this.logger.log('user log in : ', success)
      localStorage.setItem('token', success.accessToken);
      localStorage.setItem('isLogin', 'true');
      localStorage.setItem('userId', success.id);
      this.router.navigateByUrl('/profile');
    }, (error: any) => {
      this.logger.error('error: ', error)
    })
  }
  private _login(data: Login) {
    return this.http.post(API + "/api/Authorization/Login", data);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('isLogin');
    localStorage.removeItem('userId');
    localStorage.removeItem('playerId');
    this.router.navigateByUrl('/')
    this.userData = null;
  }
  isLogin() {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.getUser(+userId);
      return true
    }
    return false;
  }
  public register(user: User) {
    this.http.post(API + '/api/Authorization/Register', user).subscribe((success: any) => {
      this.user = success;
      localStorage.setItem('token', success.accessToken);
      localStorage.setItem('isLogin', 'true');
      localStorage.setItem('userId', success.id);
      this.router.navigateByUrl('');
      this.translateSrv.get("SUCCESS.new-user").subscribe(msg => this.toastSrv.showMessage(msg, 'success'))
      this.logger.log('post User: ', success);
    }, (error: HttpErrorResponse) => {
      this.translateSrv.get("ERRORS.new-user").subscribe(msg => this.toastSrv.showMessage(msg, 'danger'))
      this.logger.error("'post User: ", error);
    })
  }

  /**
  *  User
  */
  private _getUser() {
    return this.http.get<User>(API + "/api/User")
  }
  private _getUserById(id: number) {
    return this.http.get<User>(API + "/api/User/" + id)
  }
  private _postUser(user: User) {
    return this.http.post<User>(API + "/api/User", user);
  }
  private _putUser(user: User, id: number) {
    return this.http.put<User>(API + "/api/User/" + id, user);
  }
  private _deleteUser(id: number) {
    return this.http.delete<User>(API + "/api/User/" + id)
  }


  /**
  * get all User
  */
  public getUser(id?: number) {
    if (!id) {
      this._getUser().subscribe((success: User) => {
        this.userData = success;
        this.logger.log('get User: ', this.userData);
      }, (error: HttpErrorResponse) => {
        this.logger.error("'get User: ", error);
      })
    } else {
      this._getUserById(id).subscribe((success: User) => {
        this.userData = success;
        this.logger.log('getById User: ', this.userData);
      }, (error: HttpErrorResponse) => {
        this.logger.error("'getById User: ", error);
      })
    }

  }
  /**
   * add new User
   */
  public postUser(user: User) {
    this._postUser(user).subscribe((success: User) => {
      this.user = success;
      this.showForm = 'playerInfo'
      this.translateSrv.get("SUCCESS.new-user").subscribe(msg => this.toastSrv.showMessage(msg, 'success'))
      this.logger.log('post User: ', success);
    }, (error: HttpErrorResponse) => {
      this.translateSrv.get("ERRORS.new-user").subscribe(msg => this.toastSrv.showMessage(msg, 'danger'))
      this.logger.error("'post User: ", error);
    })
  }

  /**
   * update User
   */
  public updateUser(user: User, id: number) {
    this._putUser(user, id).subscribe((success: User) => {
      this.logger.log('put User: ', success);
      this.user = success;
      this.translateSrv.get("SUCCESS.update-User").subscribe(msg => this.toastSrv.showMessage(msg, 'success'))
    }, (error: HttpErrorResponse) => {
      this.translateSrv.get("ERRORS.update-User").subscribe(msg => this.toastSrv.showMessage(msg, 'danger'))
      this.logger.error("'put User: ", error);
    })
  }

  /**
   * remove User
   */
  public removeUser(id: number) {
    this._deleteUser(id).subscribe((success: User) => {
      this.logger.log('put User: ', success);
    }, (error: HttpErrorResponse) => {
      this.logger.error("'put User: ", error);
    })
  }

  /**
  * - User
  */


  /**
*  Player
*/
  private _getPlayer() {
    return this.http.get<Player>(API + "/api/Player")
  }
  private _getPlayerById(id: number) {
    return this.http.get<Player>(API + "/api/Player/" + id)
  }
  private _postPlayer(Player: Player) {
    return this.http.post<Player>(API + "/api/Player", Player);
  }
  private _putPlayer(Player: Player, id: number) {
    return this.http.put<Player>(API + "/api/Player/" + id, Player);
  }
  private _deletePlayer(id: number) {
    return this.http.delete<Player>(API + "/api/Player/" + id)
  }


  /**
  * get all Player
  */
  public getPlayer(id?: number) {
    if (!id) {
      this._getPlayer().subscribe((success: Player) => {
        this.playerData = success;
        this.logger.log('get Player: ', success);
      }, (error: HttpErrorResponse) => {
        this.logger.error("'get Player: ", error);
      })
    } else {
      this._getPlayerById(id).subscribe((success: Player) => {
        this.logger.log('getById Player: ', success);
      }, (error: HttpErrorResponse) => {
        this.logger.error("'getById Player: ", error);
      })
    }

  }
  /**
   * add new Player
   */
  public postPlayer(Player: Player) {
    this._postPlayer(Player).subscribe((success: Player) => {
      this.player = success;
      this.router.navigateByUrl('/')
      this.translateSrv.get("SUCCESS.new-Player").subscribe(msg => this.toastSrv.showMessage(msg, 'success'))
      this.logger.log('post Player: ', success);
    }, (error: HttpErrorResponse) => {
      this.translateSrv.get("ERRORS.new-Player").subscribe(msg => this.toastSrv.showMessage(msg, 'danger'))
      this.logger.error("'post Player: ", error);
    })
  }

  /**
   * update Player
   */
  public updatePlayer(Player: Player, id: number) {
    this._putPlayer(Player, id).subscribe((success: Player) => {
      this.logger.log('put Player: ', success);
      this.player = success;
      this.translateSrv.get("SUCCESS.update-Player").subscribe(msg => this.toastSrv.showMessage(msg, 'success'))
    }, (error: HttpErrorResponse) => {
      this.translateSrv.get("ERRORS.update-Player").subscribe(msg => this.toastSrv.showMessage(msg, 'danger'))
      this.logger.error("'put Player: ", error);
    })
  }

  /**
   * remove Player
   */
  public removePlayer(id: number) {
    this._deletePlayer(id).subscribe((success: Player) => {
      this.logger.log('put Player: ', success);
    }, (error: HttpErrorResponse) => {
      this.logger.error("'put Player: ", error);
    })
  }

  /**
  * - Player
  */
}
