import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City, Country } from '../_common/types';
import { API } from '../_helper/api.config';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  counties: any;
  cities: any = [{
    countryId: 1,
    adressLongitude: '',
    adressLatitude: '',
    center: '',
    nameAr: 'جدة',
    nameEn: 'Jeddah',
  },
  {
    countryId: 1,
    adressLongitude: '',
    adressLatitude: '',
    center: '',
    nameAr: 'رياض',
    nameEn: 'Riyadh',
  },
  {
    countryId: 1,
    adressLongitude: '',
    adressLatitude: '',
    center: '',
    nameAr: 'مكة المكرمه',
    nameEn: 'Makkah',
  },
  {
    countryId: 1,
    adressLongitude: '',
    adressLatitude: '',
    center: '',
    nameAr: 'المدينه المنورة',
    nameEn: 'Maddina',
  },
  {
    countryId: 1,
    adressLongitude: '',
    adressLatitude: '',
    center: '',
    nameAr: 'دمام',
    nameEn: 'Dammam',
  },
  ]
  constructor(private http: HttpClient, private logger: LoggerService) {
    this.getCity();
    this.getCitiesByCouteryId();
    this.getCountry();
  }


  private _getCountry() {
    return this.http.get<Country>(API + "/api/Country")
  }
  private _getCountryById(id: string) {
    return this.http.get<Country>(API + "/api/Country/" + id)
  }
  private _postCountry(country: Country) {
    return this.http.post<Country>(API + "/api/Country", country);
  }
  private _putCountry(country: Country, id: string) {
    return this.http.put<Country>(API + "/api/Country/" + id, country);
  }
  private _deleteCountry(id: string) {
    return this.http.delete<Country>(API + "/api/Country/" + id)
  }
  /**
     * get all country
     */
  public getCountry(id?: string) {
    if (!id) {
      this._getCountry().subscribe((success: Country) => {
        this.counties = success;
        this.logger.log('get Country: ', success);
      }, (error: HttpErrorResponse) => {
        this.logger.error("'get Country: ", error);
      })
    } else {
      this._getCountryById(id).subscribe((success: Country) => {
        this.logger.log('getById Country: ', success);
      }, (error: HttpErrorResponse) => {
        this.logger.error("'getById Country: ", error);
      })
    }

  }
  /**
   * add new country
   */
  public postCountry(country: Country) {
    this._postCountry(country).subscribe((success: Country) => {
      this.logger.log('post Country: ', success);
    }, (error: HttpErrorResponse) => {
      this.logger.error("'post Country: ", error);
    })
  }

  /**
   * update country
   */
  public updateCountry(country: Country, id: string) {
    this._putCountry(country, id).subscribe((success: Country) => {
      this.logger.log('put Country: ', success);
    }, (error: HttpErrorResponse) => {
      this.logger.error("'put Country: ", error);
    })
  }

  /**
   * remove country
   */
  public removeCountry(id: string) {
    this._deleteCountry(id).subscribe((success: Country) => {
      this.logger.log('put Country: ', success);
    }, (error: HttpErrorResponse) => {
      this.logger.error("'put Country: ", error);
    })
  }

  /**
  * - City
  */





  private _getCity() {
    return this.http.get<City>(API + "/api/City")
  }
  private _getCityById(id: string) {
    return this.http.get<City>(API + "/api/City/" + id)
  }
  private _postCity(city: City) {
    return this.http.post<City>(API + "/api/City", city);
  }
  private _putCity(city: City, id: string) {
    return this.http.put<City>(API + "/api/City/" + id, city);
  }
  private _deleteCity(id: string) {
    return this.http.delete<City>(API + "/api/City/" + id)
  }
  /**
     * get all City
     */
  public getCity(id?: string) {
    if (!id) {
      this._getCity().subscribe((success: City) => {
        this.counties = success;
        this.logger.log('get City: ', success);
      }, (error: HttpErrorResponse) => {
        this.logger.error("'get City: ", error);
      })
    } else {
      this._getCityById(id).subscribe((success: City) => {
        this.logger.log('getById City: ', success);
      }, (error: HttpErrorResponse) => {
        this.logger.error("'getById City: ", error);
      })
    }

  }
  public getCitiesByCouteryId() {
    this.http.get<City>(API + '/api/City/ByCountry/1').subscribe((success: City) => {
      this.logger.log('getCitiesByCouteryId City: ', success);
    }, (error: HttpErrorResponse) => {
      this.logger.error("'getCitiesByCouteryId City: ", error);
    })
  }
  /**
   * add new City
   */
  public postCity(City: City) {
    this._postCity(City).subscribe((success: City) => {
      this.logger.log('post City: ', success);
    }, (error: HttpErrorResponse) => {
      this.logger.error("'post City: ", error);
    })
  }

  /**
   * update City
   */
  public updateCity(City: City, id: string) {
    this._putCity(City, id).subscribe((success: City) => {
      this.logger.log('put City: ', success);
    }, (error: HttpErrorResponse) => {
      this.logger.error("'put City: ", error);
    })
  }

  /**
   * remove City
   */
  public removeCity(id: string) {
    this._deleteCity(id).subscribe((success: City) => {
      this.logger.log('put City: ', success);
    }, (error: HttpErrorResponse) => {
      this.logger.error("'put City: ", error);
    })
  }

  /**
  * - Country
  */

}
