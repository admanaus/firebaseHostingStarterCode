import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import {FlexLayoutModule} from "@angular/flex-layout";
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { FormsModule } from '@angular/forms';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { ContactListComponent } from './contact/company-list/contact-list.component';
import { ContactEditComponent } from './contact/company-edit/contact-edit.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';





@NgModule({
  declarations: [
    AppComponent,
    CompanyEditComponent,
    CompanyListComponent,
    ContactEditComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
