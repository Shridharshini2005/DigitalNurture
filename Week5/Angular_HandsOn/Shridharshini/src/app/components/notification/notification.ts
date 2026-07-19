import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  // Component-level provider: creates a new NotificationService instance
  // scoped to this component (and its children) instead of reusing the
  // app-wide instance. Each <app-notification> gets its own isolated state.
  providers: [NotificationService],
  templateUrl: './notification.html',
})
export class NotificationComponent {
  private notificationService = inject(NotificationService);

  messages = this.notificationService.getAll();

  addSample(): void {
    this.notificationService.push('You have been enrolled successfully!');
    this.messages = this.notificationService.getAll();
  }
}
