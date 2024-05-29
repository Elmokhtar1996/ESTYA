import { Reservation } from './../../model/Reservation';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../service/api.serviceReservation';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-reservation-edit',
  templateUrl: './reservation-edit.component.html',
  styleUrls: ['./reservation-edit.component.css'],
})

export class ReservationEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  reservationData: Reservation[];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateReservation();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getReservation(id);
    this.editForm = this.fb.group({
      dateheure_debut:['', [Validators.required]],
      dateheure_fin:['', [Validators.required]],
      utilisateur_id:['', [Validators.required]],
      salle_id: ['', [Validators.required]],

    });
  }

 

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getReservation(id) {
    this.apiService.getReservation(id).subscribe((data) => {
      this.editForm.setValue({
        dateheure_debut: data['dateheure_debut'],
        dateheure_fin: data['dateheure_fin'],
        utilisateur_id: data['utilisateur_id'],
        salle_id: data['salle_id'],

       
      });
    });
  }

  updateReservation() {
    this.editForm = this.fb.group({
    
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateReservation(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/reservation-list');
            console.log('Content updated successfully!');
          },
          error: (e) => {
            console.log(e);
          },
        });
      }
    }
  }
}
