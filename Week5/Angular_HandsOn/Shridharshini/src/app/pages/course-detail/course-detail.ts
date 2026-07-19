import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-detail.html',
})
export class CourseDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private courseService = inject(CourseService);

  course: Course | undefined;
  loading = true;

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : NaN;
    if (!isNaN(id)) {
      this.courseService.getCourseById(id).subscribe({
        next: (course) => (this.course = course),
        complete: () => (this.loading = false),
        error: () => (this.loading = false),
      });
    } else {
      this.loading = false;
    }
  }
}
