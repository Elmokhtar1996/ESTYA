import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/authconfig.interceptor';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SalleListComponent } from './components/salle-list/salle-list.component';
import { SalleEditComponent } from './components/salle-edit/salle-edit.component';
import { SalleCreateComponent } from './components/salle-create/salle-create.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { ReservationListComponent } from './components/reservation-list/reservation-list.component';
import { ReservationEditComponent } from './components/reservation-edit/reservation-edit.component';
import { ReservationCreateComponent } from './components/reservation-create/reservation-create.component';
import { OinReservationComponent } from './components/oin-reservation/oin-reservation.component';
import { OneUserComponent } from './components/one-user/one-user.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ContactComponent } from './components/contact/contact.component';
import { TimelineResourceComponent } from './conponents/timeline-resource/timeline-resource.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';







@NgModule({
  declarations: [
    
    AppComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeeListComponent,
    SalleListComponent,
    SalleEditComponent,
    SalleCreateComponent,
    SidebarComponent,
    UserCreateComponent,
    UserListComponent,
    UserEditComponent,
    ReservationListComponent,
    ReservationEditComponent,
    ReservationCreateComponent,
    OinReservationComponent,
    OneUserComponent,
    SigninComponent,
    SignupComponent,
    UserProfileComponent,
    ContactComponent,
    TimelineResourceComponent,

    
   
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
