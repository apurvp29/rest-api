import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CitiesService } from "../cities.service";
import { NgForOf } from "@angular/common";
import { FetchService } from "../fetch.service";

@Component({
  selector: 'app-cities',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css'
})
export class CitiesComponent implements OnChanges {
  @Input() selectedCity: string | undefined;

  constructor(
    private citiesService: CitiesService,
    private fetchService: FetchService
  ) {}

  cities: { city_name: string }[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    // let val = this.selectedCountry;
    // console.log(val);
    // if(changes['selectedCity'].currentValue === "") {
    //   this.cities = [];
    // }
    if(changes['selectedCity'].currentValue !== "" && changes['selectedCity'].currentValue !== undefined) {
      this.cities = [];
      this.citiesService.fetchCities(changes['selectedCity'].currentValue)
        .subscribe(data => {
          data.forEach(value => {
            this.cities.push(value);
          })
        })
    }
  }
}
