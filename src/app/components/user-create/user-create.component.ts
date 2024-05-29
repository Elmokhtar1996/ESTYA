import { Router } from '@angular/router';
import { ApiService } from './../../service/api.serviceUser';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
})

export class UserCreateComponent implements OnInit {
  submitted = false;
  userForm: FormGroup;

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
    this.userForm = this.fb.group({
      nom:['', [Validators.required]],
      prenom:['', [Validators.required]],
      mot_de_pass:['', [Validators.required]],
      num_adresse: ['', [Validators.required]],
      nom_rue:['', [Validators.required]],
      code_postale: ['', [Validators.required]],
      ville: ['', [Validators.required]],
      pays:['', [Validators.required]],
      email:[
        '',
        [
          Validators.required
        ]
      ],
      tel:  ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      civilite: ['', [Validators.required]],

    });
  }
    
 

  // Getter to access form control
  get myForm() {
    return this.userForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.userForm.valid) {
      return false;
    } else {
      return this.apiService.createUser(this.userForm.value).subscribe({
        complete: () => {
          console.log('User successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/user-list'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}
