import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from '../_models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
 baseUrl: string;
 countries: Country[];

 constructor(private http: HttpClient) {
    this.baseUrl = environment.countriesApiUrl;
  }

 getCountries(): Observable<Country[]> {
   return this.http.get<Country[]>(this.baseUrl + 'all');
 }
}
