import { User } from './../../model/User';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../service/api.serviceUser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})

export class UserEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  userData: User[];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateUser();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getUser(id);
    this.editForm = this.fb.group({
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
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      tel:  ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      civilite: ['', [Validators.required]],

    });
  }

 

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getUser(id) {
    this.apiService.getUser(id).subscribe((data) => {
      this.editForm.setValue({
        nom: data['nom'],
        prenom: data['prenom'],
        mot_de_pass: data['mot_de_pass'],
        num_adresse: data['num_adresse'],
        nom_rue: data['nom_rue'],
        code_postale: data['code_postale'],
        ville: data['ville'],
        pays: data['pays'],
        email: data['email'],
        tel: data['tel'],
        civilite: data['civilite'],
       
      });
    });
  }

  updateUser() {
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
        this.apiService.updateUser(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/user-list');
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
