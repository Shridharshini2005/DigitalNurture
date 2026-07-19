import { Routes } from '@angular/router';
import { unsavedChangesGuard } from '../../guards/unsaved-changes-guard';

// Standalone Angular equivalent of "ng generate module features/enrollment
// --routing" + moving the enrollment form components into it. Instead of an
// NgModule, we export a lazily-loaded Routes array referenced via
// loadChildren in app.routes.ts — this still produces a separate chunk
// that's only downloaded the first time /enroll is visited.
export const ENROLLMENT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../../pages/enrollment-form/enrollment-form').then((m) => m.EnrollmentForm),
    canDeactivate: [unsavedChangesGuard],
  },
  {
    path: 'reactive',
    loadComponent: () =>
      import('../../pages/reactive-enrollment-form/reactive-enrollment-form').then(
        (m) => m.ReactiveEnrollmentForm
      ),
    canDeactivate: [unsavedChangesGuard],
  },
];
