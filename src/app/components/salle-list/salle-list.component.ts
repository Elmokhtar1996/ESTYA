import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.serviceSalle';
@Component({
  selector: 'app-salle-list',
  templateUrl: './salle-list.component.html',
  styleUrls: ['./salle-list.component.css']
})
export class SalleListComponent implements OnInit {
  
  Salle:any = [];
  constructor(private apiService: ApiService) { 
    this.readSalle();
  }
  ngOnInit() {}
  readSalle(){
    this.apiService.getSalles().subscribe((data) => {
     this.Salle = data;
    })    
  }
  removeSalle(salle, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteSalle(salle._id).subscribe((data) => {
          this.Salle.splice(index, 1);
        }
      )    
    }
  }
}