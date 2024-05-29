import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.serviceUser';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-one-user',
  templateUrl: './one-user.component.html',
  styleUrls: ['./one-user.component.css']
})
export class OneUserComponent implements OnInit {
  User: any = [];

  constructor(
    private apiService: ApiService,
    private actRoute: ActivatedRoute
    
    
    ) {
 
  }

  ngOnInit(): void {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getUser(id);
  }
  getUser(id) {
    this.apiService.getUser(id).subscribe((data) => {

      this.User = data;
  


    });
  }

}
