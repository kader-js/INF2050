 import { NgModule } from '@angular/core';
 import { BrowserModule } from '@angular/platform-browser';

 import { AppComponent } from './app.component';
 import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 import {AppRoutingModule, routingComponents} from './app-routing.module';
 import {RouterModule} from '@angular/router';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import {ReactiveFormsModule} from '@angular/forms';
 import {MatTableModule} from '@angular/material/table';
 import {MatPaginatorModule} from '@angular/material/paginator';
 import {MatSortModule} from '@angular/material/sort';
 import {MatFormFieldModule} from '@angular/material/form-field';

 @NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
   imports: [
     BrowserModule,
     NgbModule,
     AppRoutingModule,
     RouterModule,
     BrowserAnimationsModule,
     ReactiveFormsModule,
     MatTableModule,
     MatPaginatorModule,
     MatSortModule,
     MatFormFieldModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
