import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkoutTrackerComponent } from './workout-tracker/workout-tracker.component';
import { WorkoutService } from './services/workout.service';
import { WorkoutDetailsComponent } from './workout-details/workout-details.component';
import { WorkoutTableComponent } from './workout-details/workout-table/workout-table.component';
import { WorkoutChartComponent } from './workout-chart/workout-chart.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, NgForm } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    WorkoutTrackerComponent,
    WorkoutDetailsComponent,
    WorkoutTableComponent,
    WorkoutChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    CommonModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    CdkTableModule,
    MatPaginatorModule,
    MatCardModule,
    BrowserAnimationsModule,
    RouterModule,
    MatSnackBarModule,
  ],
  providers: [provideClientHydration(), WorkoutService],
  bootstrap: [AppComponent],
})
export class AppModule {}
