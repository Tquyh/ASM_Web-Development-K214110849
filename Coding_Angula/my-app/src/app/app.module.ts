import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Ptb1Component } from './ptb1/ptb1.component';

import { FormsModule } from '@angular/forms';
import { BindingPropertyComponent } from './Ex79binding-property/binding-property.component';
import { BindingClassComponent } from './Ex80binding-class/binding-class.component';
import { BindingStyleComponent } from './Ex81binding-style/binding-style.component';
import { BindingEventComponent } from './Ex82binding-event/binding-event.component';
import { ChangimageComponent } from './changimage/changimage.component';
import { ListproductComponent } from './listproduct/listproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    Ptb1Component,
    BindingPropertyComponent,
    BindingClassComponent,
    BindingStyleComponent,
    BindingEventComponent,
    ChangimageComponent,
    ListproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
