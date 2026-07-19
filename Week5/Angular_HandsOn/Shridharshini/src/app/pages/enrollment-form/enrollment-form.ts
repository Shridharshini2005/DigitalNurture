import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { CanComponentDeactivate } from '../../guards/unsaved-changes-guard';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.css',
})
export class EnrollmentForm implements CanComponentDeactivate {
  studentName = '';
  studentEmail = '';
  courseId: number | null = null;
  preferredSemester: 'Odd' | 'Even' = 'Odd';
  agreeToTerms = false;

  submitted = false;

  onSubmit(form: NgForm): void {
    console.log(form.value, form.valid);
    if (form.valid) {
      this.submitted = true;
    }
  }

  hasUnsavedChanges(): boolean {
    return !this.submitted && (!!this.studentName || !!this.studentEmail || !!this.courseId);
  }
}
