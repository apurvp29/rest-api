import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FetchService } from "./fetch.service";

@Injectable({
  providedIn: "root"
})
export class CitiesService {
  constructor(
    private http: HttpClient,
    private fetchService: FetchService
  ) {}

  fetchCities(selectedCity: string | undefined) {
    const url: string = "https://www.universal-tutorial.com/api/cities/" + selectedCity;
    const authorization: string = "Bearer " + this.fetchService.authToken?.auth_token;
    const headers = new HttpHeaders()
      .set("Authorization", authorization)
      .set("Accept", "application/json");
    return this.http.get<{ city_name: string }[]>(url, { headers: headers });
  }
}
