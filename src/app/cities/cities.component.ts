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
  @Input() selectedState: string | undefined;

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
    if(changes['selectedState'].currentValue !== "" && changes['selectedState'].currentValue !== undefined) {
      this.cities = [];
      this.citiesService.fetchCities(changes['selectedState'].currentValue)
        .subscribe(data => {
          data.forEach(value => {
            this.cities.push(value);
          })
        })
    } else {
      this.cities = [];
    }
  }
}
