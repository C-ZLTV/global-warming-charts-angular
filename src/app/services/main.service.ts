import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  temperature = 'https://global-warming.org/api/temperature-api'
  co2 = 'https://global-warming.org/api/co2-api'
  methane = 'https://global-warming.org/api/methane-api'
  no2 = 'https://global-warming.org/api/nitrous-oxide-api'
  arctic = 'https://global-warming.org/api/arctic-api'

  getData(url: string){
    return this.http.get(url)
    .pipe(
      catchError(() => {
        return throwError(() => new Error('Couldn\'t load chart'))
      })
    )
  }

  getTemp(){
    return this.getData(this.temperature)
  }

  getCo2(){
    return this.getData(this.co2)
  }

  getMethane(){
    return this.getData(this.methane)
  }

  getNo2(){
    return this.getData(this.no2)
  }

  getArctic(){
    return this.getData(this.arctic)
  }
}
