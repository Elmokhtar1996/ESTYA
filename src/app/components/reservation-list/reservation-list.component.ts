
import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { ApiService } from './../../service/api.serviceReservation';
import { AuthService } from './../../shared/auth.service';



@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  
  styleUrls: ['./reservation-list.component.css'],
})
 
export class ReservationListComponent implements  OnInit {
  Reservation: any = [];
  User: any=[];
  Salle: any=[];
  y = "user";

  constructor(private apiService: ApiService,public authService: AuthService) {
    this.y = this.authService.test();
    alert( this.y)
    this.readReservation();
    this.readUser();
    this.readSalle();
  }

  ngOnInit() {}

  readReservation() {
    this.apiService.getReservations().subscribe((data) => {
      this.Reservation = data;
    

    });
  }
  readUser() {
    this.apiService.getUser().subscribe((data) => {
      this.User = data;
    

   
    });
  }
  readSalle() {
    this.apiService.getSalle().subscribe((data) => {
      this.Salle = data;
    });
  }
  

  

  removeReservation(reservation, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deleteReservation(reservation._id).subscribe((data) => {
        this.Reservation.splice(index, 1);
      });
    }
  }
}
