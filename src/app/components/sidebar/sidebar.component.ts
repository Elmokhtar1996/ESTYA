
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../../shared/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  y = "user";
User: any = [];
  constructor(public authService: AuthService, private actRoute: ActivatedRoute) {
    this.y = this.authService.test();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.authService.getUserProfile(id).subscribe((res) => {
      this.User = res.msg;
    });
   }
  logout() {
    this.authService.doLogout()
  }

}