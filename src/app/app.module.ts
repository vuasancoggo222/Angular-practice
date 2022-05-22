import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { NameComponent } from './name/name.component';

import { GenderComponent } from './gender/gender.component';
import { StatusComponent } from './status/status.component';
import { AvatarComponent } from './avatar/avatar.component';
import {FormsModule} from "@angular/forms";
import { FormComponent } from './form/form.component';
import { FormItemComponent } from './form-item/form-item.component';
import { AgeComponent } from './age/age.component';
@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    GenderComponent,
    StatusComponent,
    AvatarComponent,
    FormComponent,
    FormItemComponent,
    AgeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
