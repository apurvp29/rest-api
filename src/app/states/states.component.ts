import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgForOf, NgIf } from "@angular/common";
import { StatesService } from "../states.service";
import { CitiesComponent } from "../cities/cities.component";

@Component({
  selector: 'app-states',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    CitiesComponent
  ],
  templateUrl: './states.component.html',
  styleUrl: './states.component.css'
})
export class StatesComponent implements OnChanges {
  @Input() selectedCountry: string | undefined;

  constructor(
    private statesService: StatesService
  ) {}

  states: { state_name: string }[] = [];
  selectedState: string | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    // let val = this.selectedCountry;
    // console.log(val);
    if(changes['selectedCountry'].currentValue !== "" && changes['selectedCountry'].currentValue !== undefined) {
      this.states = [];
      this.statesService.fetchStates(changes['selectedCountry'].currentValue)
        .subscribe(data => {
          data.forEach(value => {
            this.states.push(value);
          })
        })
    }
    this.selectedState = "";
  }

  onChangeHandler(event: Event) {
    this.selectedState = event.toString();
  }
}
