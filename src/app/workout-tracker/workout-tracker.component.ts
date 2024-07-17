import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { WorkoutService } from '../services/workout.service';
import { User, Workout } from '../models/workout';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-workout-tracker',
  templateUrl: './workout-tracker.component.html',
  styleUrl: './workout-tracker.component.css',
})
export class WorkoutTrackerComponent {
  userName: string = '';
  workoutType: string = '';
  workoutMinutes: number = 0;
  users: User[] = [];
  filteredUsers: User[] = [];
  selectedValue: string = '';
  workoutTypes = ['Swimming', 'Running', 'Yoga', 'Cycling'];
  @ViewChild('workoutForm') workoutForm!: NgForm;

  constructor(
    private workoutService: WorkoutService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    // this.users = this.workoutService.getUsers();
  }

  addWorkout() {
    if (this.workoutForm.valid) {
      const existingUser = this.workoutService.users.find(
        (user) => user.name === this.userName
      );

      if (existingUser) {
        // If user exists, add the new workout to their workouts array

        //If in existing user the same workout type is already there
        const existingWorkout = existingUser.workouts.find(
          (workout) => workout.type === this.workoutType
        );

        if (existingWorkout) {
          this.showSnackBar(
            'This workout type already exists for ' + `${this.userName}`
          );
          existingUser.workouts.push({
            minutes: this.workoutMinutes,
          });
          return;
        } else {
          existingUser.workouts.push({
            type: this.workoutType,
            minutes: this.workoutMinutes,
          });
        }
      } else {
        // If user does not exist, create a new user
        const newUser: User = {
          id: this.workoutService.users.length + 1,
          name: this.userName,
          workouts: [{ type: this.workoutType, minutes: this.workoutMinutes }],
        };
        this.workoutService.addUser(newUser);
      }

      this.showSnackBar('Workout details added for ' + `${this.userName}`);

      this.workoutForm.resetForm();
    }
  }
  showSnackbarForAdd($event: any) {
    if (!this.workoutForm.valid) {
      this.snackBar.open('First fill all the required details', 'Close', {
        duration: 1000,
        verticalPosition: 'top',
      });
    }
  }
  showSnackBar(message: string) {
    if (this.workoutForm.valid) {
      this.snackBar.open(message, 'Close', {
        duration: 3000,
        verticalPosition: 'top',
      });
    }
  }
  //for navigating to the workout deatils page
  navigateToWorkoutDetails() {
    this.router.navigate(['workout-tracker/details']);
  }
}
