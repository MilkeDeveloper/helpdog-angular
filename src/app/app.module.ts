import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoSvgComponent } from './logo-svg/logo-svg.component';
import { TextSectionComponent } from './text-section/text-section.component';
import { DogImgSectionComponent } from './dog-img-section/dog-img-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { ContribuitionModalComponent } from './contribuition-modal/contribuition-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { QRCodeModule } from 'angularx-qrcode';
import { PaymentModalComponent } from './payment-modal/payment-modal.component';
import { QrCodeDisplayComponent } from './qr-code-display/qr-code-display.component';
import { PaymentService } from './payment.service';

@NgModule({
  declarations: [
    AppComponent,
    LogoSvgComponent,
    TextSectionComponent,
    DogImgSectionComponent,
    ContribuitionModalComponent,
    HomeComponent,
    DashboardComponent,
    PaymentModalComponent,
    QrCodeDisplayComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    QRCodeModule
  ],
  providers: [PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
