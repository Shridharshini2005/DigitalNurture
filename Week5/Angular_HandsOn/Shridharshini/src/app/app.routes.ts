import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'courses',
    loadComponent: () =>
      import('./pages/courses-layout/courses-layout').then((m) => m.CoursesLayout),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/course-list/course-list').then((m) => m.CourseList),
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./pages/course-detail/course-detail').then((m) => m.CourseDetail),
      },
    ],
  },
  {
    path: 'profile',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/student-profile/student-profile').then((m) => m.StudentProfile),
  },
  {
    path: 'enroll',
    canActivate: [authGuard],
    // Lazy loaded: this chunk is only downloaded when /enroll is first visited.
    loadChildren: () =>
      import('./features/enrollment/enrollment.routes').then((m) => m.ENROLLMENT_ROUTES),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
  },
];
