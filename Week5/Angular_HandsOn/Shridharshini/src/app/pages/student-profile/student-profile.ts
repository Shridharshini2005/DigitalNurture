import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course } from '../../models/course.model';
import { selectEnrolledCourses } from '../../store/enrollment/enrollment.selectors';
import { loadCourses } from '../../store/course/course.actions';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-profile.html',
})
export class StudentProfile implements OnInit {
  private store = inject(Store);

  studentName = 'Yuki Tanaka';
  gpa = 3.8;
  enrolledCourses$: Observable<Course[]> = this.store.select(selectEnrolledCourses);

  ngOnInit(): void {
    // Ensure the course slice is populated so the cross-slice
    // selectEnrolledCourses selector has data to join against.
    this.store.dispatch(loadCourses());
  }
}
