import { Router } from '@angular/router';
import { ApiService } from './../../service/api.serviceSalle';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-salle-create',
  templateUrl: './salle-create.component.html',
  styleUrls: ['./salle-create.component.css'],
})
export class SalleCreateComponent implements OnInit {
  submitted = false;
  salleForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.salleForm = this.fb.group({
      nom_salle: [''],
      ecran: [''],
      camera: [''],
      chaise: [''],
      table:  [''],
  
    });
  }
  
  // Getter to access form control
  get myForm() {
    return this.salleForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.salleForm.valid) {
      return false;
    } else {
      return this.apiService.createSalle(this.salleForm.value).subscribe({
        complete: () => {
          console.log('salle successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/salles-list'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}