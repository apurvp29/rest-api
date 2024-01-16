import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {CitiesService} from "../cities.service";

@Component({
  selector: 'app-cities',
  standalone: true,
  imports: [],
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css'
})
export class CitiesComponent implements OnChanges {
  @Input() selectedCity: string | undefined;

  constructor(
    private citiesService: CitiesService
  ) {}

  cities: { city_name: string }[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    // let val = this.selectedCountry;
    // console.log(val);
    if(!changes['selectedCity'].firstChange) {
      this.cities = [];
      this.citiesService.fetchCities(changes['selectedCountry'].currentValue)
        .subscribe(data => {
          data.forEach(value => {
            this.cities.push(value);
          })
        })
    }
  }
}
