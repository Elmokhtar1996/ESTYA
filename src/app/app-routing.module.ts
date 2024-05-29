import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthGuard } from "./shared/auth.guard";
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { SalleCreateComponent } from './components/salle-create/salle-create.component';
import { SalleListComponent } from './components/salle-list/salle-list.component';
import { SalleEditComponent } from './components/salle-edit/salle-edit.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { ReservationCreateComponent } from './components/reservation-create/reservation-create.component';
import { ReservationListComponent } from './components/reservation-list/reservation-list.component';
import { ReservationEditComponent } from './components/reservation-edit/reservation-edit.component';
import { OinReservationComponent } from './components/oin-reservation/oin-reservation.component';
import { OneUserComponent } from './components/one-user/one-user.component';
import { ContactComponent } from './components/contact/contact.component';
import { TimelineResourceComponent } from './conponents/timeline-resource/timeline-resource.component';




const routes: Routes = [
  { path: 'create-employee', component: EmployeeCreateComponent },
  { path: 'edit-employee/:id', component: EmployeeEditComponent },
  { path: 'employees-list', component: EmployeeListComponent },
  { path: 'create-salle', component: SalleCreateComponent },
  { path: 'edit-salle/:id', component: SalleEditComponent },
  { path: 'salles-list', component: SalleListComponent },
  { path: 'user-create', component: UserCreateComponent },
  { path: 'reservation-create', component: ReservationCreateComponent },
  { path: 'user-list', component: UserListComponent, canActivate: [AuthGuard] },
  { path: 'reservation-list', component: ReservationListComponent, canActivate: [AuthGuard]},
  { path: 'user-edit/:id', component: UserEditComponent },
  { path: 'reservation-edit/:id', component: ReservationEditComponent },
  { path: 'reservation-oin/:id', component: OinReservationComponent },
  { path: 'user-one/:id', component: OneUserComponent },
  { path: '', component: SigninComponent },
  { path: 'log-in', component: SigninComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'user-profile/:id', component: UserProfileComponent},
  { path: 'calendar', component: TimelineResourceComponent },


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
