import { Router } from '@angular/router';
import { ApiService } from '../../service/api.serviceReservation';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-create',
  templateUrl: './reservation-create.component.html',
  styleUrls: ['./reservation-create.component.css'],
})

export class ReservationCreateComponent implements OnInit {
  submitted = false;
  reservationForm: FormGroup;
  User: any = [];
  Salle: any = [];

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService,
 
  ) {
    this.mainForm();
    this.readUser();
    this.readSalle();
  }

  ngOnInit() {}

  mainForm() {
    this.reservationForm = this.fb.group({
      dateheure_debut:[''],
      dateheure_fin:[''],
      utilisateur_id:['', [Validators.required]],
      salle_id: ['', [Validators.required]],
  

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
  


  // Getter to access form control
  get myForm() {
    return this.reservationForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.reservationForm.valid) {
      return false;
    } else {
      return this.apiService.createReservation(this.reservationForm.value).subscribe({
        complete: () => {
          console.log('Reservation successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/reservation-list'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}
