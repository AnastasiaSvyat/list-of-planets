import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule,Routes } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from "@angular/common/http";
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { InformationAndListPlanetComponent } from './components/information-and-list-planet/information-and-list-planet.component';
import { SelectPlanetComponent } from './components/information-and-list-planet/select-planet/select-planet.component';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    SelectPlanetComponent,
    InformationAndListPlanetComponent,
  ],
  imports: [
    MatGridListModule,
    MatMenuModule,
    HttpClientModule,
    MatSidenavModule,
    MatDialogModule,
    MatCardModule,
    FormsModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatSelectModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatIconModule,
    ReactiveFormsModule,
    MatTableModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
