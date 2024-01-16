import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FetchService } from "./fetch.service";
import {CountriesComponent} from "./countries/countries.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CountriesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular-restapi';

  constructor(
    private fetchService: FetchService,
    // private countryService: CountryService,
    // private http: HttpClient,
  ) {}

  authToken: { auth_token: string } | undefined;
  // countries: Country[] = [];

  ngOnInit(): void {
    this.fetchService.getAuthToken();
    // setTimeout(() => {
    //   this.fetchService.getCountries();
    // }, 2000);

    // this.countryService.getCountries(this.authToken?.auth_token)
    //   .subscribe(data => {
    //     data.forEach(value => {
    //       this.countries.push(value);
    //     })
    //   })
    //
    // console.log(this.countries);
  }

  onClick() {
    // const url: string = "https://www.universal-tutorial.com/api/countries";
    // const authorization: string = "Bearer " + this.authToken?.auth_token;
    // const headers = new HttpHeaders()
    //   .set("Authorization", authorization)
    //   .set("Accept", "application/json");
    //
    // this.http.get(url, { headers: headers }).subscribe(data => console.log(data));
    // this.countryService.getCountries(this.authToken?.auth_token)
    //   .subscribe(data => {
    //     data.forEach(value => {
    //       this.countries.push(value);
    //     })
    //   })
    // console.log(this.countries);
  }

}
