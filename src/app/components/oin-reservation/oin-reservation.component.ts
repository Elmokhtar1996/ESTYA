import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.serviceReservation';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-oin-reservation',
  templateUrl: './oin-reservation.component.html',
  styleUrls: ['./oin-reservation.component.css']
})
export class OinReservationComponent implements OnInit {
  Reservation: any = [];

  constructor(
    private apiService: ApiService,
    private actRoute: ActivatedRoute
    
    
    ) {
 
  }

  ngOnInit(): void {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getReservation(id);
  }
  getReservation(id) {
    this.apiService.getReservation(id).subscribe((data) => {

      this.Reservation = data;
  


    });
  }

}
