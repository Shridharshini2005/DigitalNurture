import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-course-summary-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-summary-widget.html',
})
export class CourseSummaryWidget implements OnInit {
  private courseService = inject(CourseService);

  courseCount = 0;

  ngOnInit(): void {
    // Shares the same singleton CourseService instance as CourseListComponent
    // and HomeComponent (providedIn: 'root').
    this.courseService.getCourses().subscribe((courses) => (this.courseCount = courses.length));
  }
}
