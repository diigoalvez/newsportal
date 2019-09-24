import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { IconsComponent } from '../../icons/icons.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { NewsPortalComponent } from 'app/news-portal/news-portal.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ComponentsModule } from 'app/components/components.module';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    HttpClientModule,
    ComponentsModule
  ],
  declarations: [
    IconsComponent,
    NewsPortalComponent
  ]
})

export class AdminLayoutModule { }
