import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoggerService } from './logger.service';
import { TranslateService } from '@ngx-translate/core';
import { Slide } from '../_common/types';
import { API } from '../_helper/api.config';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  slides: any;
  constructor(private http: HttpClient, private logger: LoggerService, private translate: TranslateService, private toasterSrv: ToastService) {
    this.getSlide();
  }
  /**
   *  Slide
   */
  private _getSlide() {
    return this.http.get<Slide>(API + "/api/Slider")
  }
  private _getSlideById(id: string) {
    return this.http.get<Slide>(API + "/api/Slider/" + id)
  }
  private _postSlide(slide: Slide) {
    return this.http.post<Slide>(API + "/api/Slider", slide);
  }
  private _putSlide(slide: Slide, id: string) {
    return this.http.put<Slide>(API + "/api/Slider/" + id, slide);
  }
  private _deleteSlide(id: string) {
    return this.http.delete<Slide>(API + "/api/Slider/" + id)
  }
  /**
   * get all slide
   */
  public getSlide(id?: string) {
    if (!id) {
      this._getSlide().subscribe((success: Slide) => {
        this.logger.log('get Slide: ', success);
        this.slides = success;

      }, (error: HttpErrorResponse) => {
        this.logger.error("'get Slide: ", error);
      })
    } else {
      this._getSlideById(id).subscribe((success: Slide) => {
        this.logger.log('getById Slide: ', success);
      }, (error: HttpErrorResponse) => {
        this.logger.error("'getById Slide: ", error);
      })
    }

  }
  /**
   * add new slide
   */
  public postSlide(slide: Slide) {
    this._postSlide(slide).subscribe((success: Slide) => {
      this.translate.get('SUCCESS.add').subscribe(msg => this.toasterSrv.showMessage(msg, 'success'))
      this.logger.log('post Slide: ', success);
    }, (error: HttpErrorResponse) => {
      this.translate.get('ERROR.add').subscribe(msg => this.toasterSrv.showMessage(msg, 'danger'))

      this.logger.error("'post Slide: ", error);
    })
  }

  /**
   * update slide
   */
  public updateSlide(slide: Slide, id: string) {
    this._putSlide(slide, id).subscribe((success: Slide) => {
      this.getSlide();
      this.logger.log('put Slide: ', success);
    }, (error: HttpErrorResponse) => {
      this.logger.error("'put Slide: ", error);
    })
  }

  /**
   * remove slide
   */
  public removeSlide(id: string) {
    this._deleteSlide(id).subscribe((success: Slide) => {
      this.getSlide();

      this.logger.log('put Slide: ', success);
    }, (error: HttpErrorResponse) => {
      this.logger.error("'put Slide: ", error);
    })
  }

  /**
  * - Slide
  */
  getYouTubeLike(link: string) {
    console.log('dfd');
    let list = link.split('/');
    let newLink = "https://www.youtube.com/embed/" + list[list.length - 1] + "?controls=0&showinfo=0&rel=0&autoplay=1&mute=1&loop=1&playlist=" + list[list.length - 1]
    console.log(list[list.length - 1]);
    return 'newLink';
  }
}




