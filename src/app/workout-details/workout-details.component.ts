import { Component } from '@angular/core';
import { User, Workout } from '../models/workout';
import { WorkoutService } from '../services/workout.service';

@Component({
  selector: 'app-workout-details',
  templateUrl: './workout-details.component.html',
  styleUrl: './workout-details.component.css',
})
export class WorkoutDetailsComponent {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchTerm: string = '';
  filterTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 2;
  workoutTypes = ['All','Swimming', 'Running', 'Yoga', 'Cycling'];
  selectedWorkoutType: string = '';
  constructor(private workoutService: WorkoutService) {
    // this.users = this.workoutService.getUsers();
    this.filteredUsers = this.workoutService.users;
  }
  ngOnChanges(){
    this.filter();
    this.search();
  }
  search() {
    this.filteredUsers = this.workoutService.users.filter((user) =>
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    console.log('this.filteredUsers', this.filteredUsers);
    if (!this.searchTerm) {
    }
  }

  filter() {
    console.log('this.selectedWorkoutType', this.selectedWorkoutType);
    if (this.selectedWorkoutType != 'All') {
      this.filteredUsers = this.workoutService.users.filter((user) =>
        user.workouts.some(
          (workout) => workout.type === this.selectedWorkoutType
        )
      );
    } else if (this.selectedWorkoutType == 'All') {
      this.filteredUsers = this.workoutService.users
    }


  }
  get paginatedUsers() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredUsers.slice(start, end);
  }

  // nextPage() {
  //   this.currentPage++;
  // }

  // previousPage() {
  //   this.currentPage--;
  // }
}
