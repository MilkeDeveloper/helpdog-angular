import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentModalComponent } from './payment-modal/payment-modal.component';


const routes: Routes = [
  { path: 'payment', component: PaymentModalComponent },
  { path: 'home', component: HomeComponent },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'payment', component: PaymentModalComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
