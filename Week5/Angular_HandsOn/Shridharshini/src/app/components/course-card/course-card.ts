import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import {
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault
} from '@angular/common';
import { HighlightDirective } from '../../directives/highlight';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    NgSwitch,NgSwitchCase,NgSwitchDefault,NgClass,NgStyle, CreditLabelPipe, HighlightDirective
  ],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnChanges {

  @Input() course!:{
    id: number;
    name: string;
    code: string;
    credits: number;
    gradeStatus: string;
  };

  @Output()
  enrollRequested = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(
      'Previous:',
      changes['course']?.previousValue,
      'Current:',
      changes['course']?.currentValue
    );
  }

  isExpanded = false;

// For this hands-on, assume every course starts as not enrolled.
isEnrolled = false;

toggleDetails(): void {
  this.isExpanded = !this.isExpanded;
}

get cardClasses() {
  return {
    'card--enrolled': this.isEnrolled,
    'card--full': this.course?.credits >= 4,
    'expanded': this.isExpanded
  };
}
get borderStyle() {

  if (!this.course) {
    return {};
  }

  switch (this.course.gradeStatus) {

    case 'passed':
      return {
        'border-left': '6px solid green'
      };

    case 'failed':
      return {
        'border-left': '6px solid red'
      };

    default:
      return {
        'border-left': '6px solid gray'
      };
  }
}
}