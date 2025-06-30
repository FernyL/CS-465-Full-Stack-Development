import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

@Component({
    selector: 'app-delete-trip',
    templateUrl: './delete-trip.component.html',
    styleUrl: './delete-trip.component.css'
})

export class DeleteTripComponent implements OnInit {

    trip!: Trip;
    message : string = '';

  constructor(
        private router: Router,
        private tripDataService: TripDataService
       ) {}
  
  ngOnInit() : void{

    // Retrieve stashed trip ID
    let tripCode = localStorage.getItem("tripCode");
    if (!tripCode) {
      alert("Something wrong, could not find where I stashed tripCode!");
        this.router.navigate(['']);
        return;
    }

    console.log('DeleteTripComponent::ngOnInit');
    console.log('tripcode:' + tripCode);

    this.tripDataService.getTrip(tripCode)
      .subscribe({
        next: (value: any) => {
          this.trip = value;
          if(!value)
          {
            this.message = 'No Trip Retrieved!';
          }
          else{
            this.message = 'Trip: ' + tripCode + ' retrieved';
          }
          console.log(this.message);
        },
      })

    this.tripDataService.deleteTrip(tripCode)
        .subscribe({
          next: (value: any) => {
            console.log(value);
            this.router.navigate(['list-trips']);
          },
        })
  }

} 
