import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { API } from '../_helper/api.config';
import { Game, PlayerFavoriteGame } from '../_common/types';
import { LoggerService } from './logger.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  gamesData: any;
  game: any;
  playerFavoriteGame: any;
  playerFavoriteGamesData: any;

  constructor(
    private http: HttpClient,
    private logger: LoggerService,
    private toastr: ToastrService,
    private translateSrv: TranslateService) {
  }

  /**
* 
*/
  showMessage(message: any, status: string) {
    this.toastr.show(
      '<span class="now-ui-icons ui-1_bell-53"></span>', message,
      {
        timeOut: 4000,
        closeButton: true,
        enableHtml: true,
        toastClass: status == 'success' ? "alert alert-success alert-with-icon" : "alert alert-danger alert-with-icon",
        positionClass: "toast-top-center"
      }
    );
  }
  /**
  *  Game
  */
  private _getGame() {
    return this.http.get<Game>(API + "/api/Game")
  }
  private _getGameById(id: number) {
    return this.http.get<Game>(API + "/api/Game/" + id)
  }
  private _postGame(game: Game) {
    return this.http.post<Game>(API + "/api/Game", game);
  }
  private _putGame(game: Game, id: number) {
    return this.http.put<Game>(API + "/api/Game/" + id, game);
  }
  private _deleteGame(id: number) {
    return this.http.delete<Game>(API + "/api/Game/" + id)
  }
  /**
* get all Game
*/
  public getGame(id?: number) {
    if (!id) {
      this._getGame().subscribe((success: Game) => {
        this.gamesData = success;
        this.logger.log('get Game: ', success);
      }, (error: HttpErrorResponse) => {
        this.logger.error("'get Game: ", error);
      })
    } else {
      this._getGameById(id).subscribe((success: Game) => {
        this.logger.log('getById Game: ', success);
      }, (error: HttpErrorResponse) => {
        this.logger.error("'getById Game: ", error);
      })
    }

  }
  /**
   * add new Game
   */
  public postGame(game: Game) {
    this._postGame(game).subscribe((success: Game) => {
      this.game = success;
      this.translateSrv.get("SUCCESS.new-game").subscribe(msg => this.showMessage(msg, 'success'))
      this.logger.log('post Game: ', success);
    }, (error: HttpErrorResponse) => {
      this.translateSrv.get("ERRORS.new-game").subscribe(msg => this.showMessage(msg, 'danger'))
      this.logger.error("'post Game: ", error);
    })
  }

  /**
   * update Game
   */
  public updateGame(game: Game, id: number) {
    this._putGame(game, id).subscribe((success: Game) => {
      this.logger.log('put Game: ', success);
      this.game = success;
      this.translateSrv.get("SUCCESS.update-Game").subscribe(msg => this.showMessage(msg, 'success'))
    }, (error: HttpErrorResponse) => {
      this.translateSrv.get("ERRORS.update-Game").subscribe(msg => this.showMessage(msg, 'danger'))
      this.logger.error("'put Game: ", error);
    })
  }

  /**
   * remove Game
   */
  public removeGame(id: number) {
    this._deleteGame(id).subscribe((success: Game) => {
      this.logger.log('put Game: ', success);
    }, (error: HttpErrorResponse) => {
      this.logger.error("'put Game: ", error);
    })
  }

  /**
  * - Game
  */




  /**
*  PlayerFavoriteGame
*/
  private _getPlayerFavoriteGame() {
    return this.http.get<PlayerFavoriteGame>(API + "/api/PlayerFavoriteGame")
  }
  private _getPlayerFavoriteGameById(id: number) {
    return this.http.get<PlayerFavoriteGame>(API + "/api/PlayerFavoriteGame/" + id)
  }
  private _postPlayerFavoriteGame(playerFavoriteGame: PlayerFavoriteGame) {
    return this.http.post<PlayerFavoriteGame>(API + "/api/PlayerFavoriteGame", playerFavoriteGame);
  }
  private _putPlayerFavoriteGame(playerFavoriteGame: PlayerFavoriteGame, id: number) {
    return this.http.put<PlayerFavoriteGame>(API + "/api/PlayerFavoriteGame/" + id, playerFavoriteGame);
  }
  private _deletePlayerFavoriteGame(id: number) {
    return this.http.delete<PlayerFavoriteGame>(API + "/api/PlayerFavoriteGame/" + id)
  }
  /**
* get all PlayerFavoriteGame
*/
  public getPlayerFavoriteGame(id?: number) {
    if (!id) {
      this._getPlayerFavoriteGame().subscribe((success: PlayerFavoriteGame) => {
        this.playerFavoriteGamesData = success;
        this.logger.log('get PlayerFavoriteGame: ', success);
      }, (error: HttpErrorResponse) => {
        this.logger.error("'get PlayerFavoriteGame: ", error);
      })
    } else {
      this._getPlayerFavoriteGameById(id).subscribe((success: PlayerFavoriteGame) => {
        this.logger.log('getById PlayerFavoriteGame: ', success);
      }, (error: HttpErrorResponse) => {
        this.logger.error("'getById PlayerFavoriteGame: ", error);
      })
    }

  }
  /**
   * add new PlayerFavoriteGame
   */
  public postPlayerFavoriteGame(playerFavoriteGame: PlayerFavoriteGame) {
    this._postPlayerFavoriteGame(playerFavoriteGame).subscribe((success: PlayerFavoriteGame) => {
      this.playerFavoriteGame = success;
      this.translateSrv.get("SUCCESS.new-playerFavoriteGame").subscribe(msg => this.showMessage(msg, 'success'))
      this.logger.log('post PlayerFavoriteGame: ', success);
    }, (error: HttpErrorResponse) => {
      this.translateSrv.get("ERRORS.new-playerFavoriteGame").subscribe(msg => this.showMessage(msg, 'danger'))
      this.logger.error("'post PlayerFavoriteGame: ", error);
    })
  }

  /**
   * update PlayerFavoriteGame
   */
  public updatePlayerFavoriteGame(playerFavoriteGame: PlayerFavoriteGame, id: number) {
    this._putPlayerFavoriteGame(playerFavoriteGame, id).subscribe((success: PlayerFavoriteGame) => {
      this.logger.log('put PlayerFavoriteGame: ', success);
      this.playerFavoriteGame = success;
      this.translateSrv.get("SUCCESS.update-PlayerFavoriteGame").subscribe(msg => this.showMessage(msg, 'success'))
    }, (error: HttpErrorResponse) => {
      this.translateSrv.get("ERRORS.update-PlayerFavoriteGame").subscribe(msg => this.showMessage(msg, 'danger'))
      this.logger.error("'put PlayerFavoriteGame: ", error);
    })
  }

  /**
   * remove PlayerFavoriteGame
   */
  public removePlayerFavoriteGame(id: number) {
    this._deletePlayerFavoriteGame(id).subscribe((success: PlayerFavoriteGame) => {
      this.logger.log('put PlayerFavoriteGame: ', success);
    }, (error: HttpErrorResponse) => {
      this.logger.error("'put PlayerFavoriteGame: ", error);
    })
  }

  /**
  * - PlayerFavoriteGame
  */
}
