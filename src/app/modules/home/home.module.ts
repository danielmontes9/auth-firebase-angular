import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component'
import { HomeRoutingModule } from './home-routing.module'
import { EmailSubscriptionComponent } from './components/email-subscription/email-subscription.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    HomeComponent,
    EmailSubscriptionComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class HomeModule { }
