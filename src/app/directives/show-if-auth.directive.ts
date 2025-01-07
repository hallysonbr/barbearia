import { Directive, TemplateRef, ViewContainerRef, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appShowIfAuth]',
})
export class ShowIfAuthDirective implements OnDestroy {
  private subscription: Subscription;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService
  ) {
    this.subscription = this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      this.toggleView(isAuthenticated);
    });
  }

  private toggleView(isAuthenticated: boolean): void {
    if (isAuthenticated) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
