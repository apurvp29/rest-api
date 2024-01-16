import {Injectable, OnInit} from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Country} from "./Country";
import {Subject} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FetchService {
  constructor(
    private http: HttpClient
  ) {}
  
  authToken: { auth_token: string } | undefined;
  url_auth: string = "https://www.universal-tutorial.com/api/getaccesstoken";
  headers_auth = new HttpHeaders()
    .set("Accept", "application/json")
    .set("api-token", "RjDsl7UXWcj1co84CWiuDqD_bGXBeZeS8Hu2UJ0GpsEX6OVtKTExPdsCC1imu30C31g")
    .set("user-email", "apurv9879@gmail.com");

  countries: Country[] = [];

  getAuthToken() {
    this.http.get<{ auth_token: string; }>(this.url_auth, {headers: this.headers_auth})
      .subscribe(data => {
        this.authToken = data;
        const url_countries: string = "https://www.universal-tutorial.com/api/countries";
        const authorization: string = "Bearer " + this.authToken?.auth_token;
        const headers_countries = new HttpHeaders()
          .set("Authorization", authorization)
          .set("Accept", "application/json");

        this.http.get<Country[]>(url_countries, { headers: headers_countries })
          .subscribe(data => {
            data.forEach(value => {
              this.countries.push(value);
            })
          });
      });
  }
}
