import { Component, OnInit } from '@angular/core';
import { Country } from "../Country";
import { NgForOf } from "@angular/common";
import { FetchService } from "../fetch.service";
import { StatesComponent } from "../states/states.component";

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [
    NgForOf,
    StatesComponent
  ],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css'
})
export class CountriesComponent implements OnInit {
  constructor(
    private fetchService: FetchService,
  ) {}

  countries: Country[] = this.fetchService.countries;
  countrySelected: string = "";

  ngOnInit(): void {
  }

  onChangeHandler(event: Event) {
    this.countrySelected = event.toString();
    // console.log(this.countrySelected)
  }
}
